import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import * as _ from 'lodash';

export const SUPPORTED_LOCALES = ['en_US', 'ja_JP', 'de_DE', 'fr_FR', 'es_ES', 'ko_KR', 'zh_CN', 'zh_TW'];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'networkflows';


  constructor(private translate: TranslateService, ) {
    this.setupTranslateLanguage();
  }


  private setupTranslateLanguage(): Promise<any> {
    this.translate.setDefaultLang('en_US');
    let userLang = (window.navigator as any).userLanguage || window.navigator.language;
    userLang = userLang.replace('-', '_');

    if (userLang && !_.includes(SUPPORTED_LOCALES, userLang)) {
      const langCode = _.includes(userLang, '_') ? userLang.split('_')[0] : userLang;
      userLang = SUPPORTED_LOCALES.find(lang => lang.startsWith(langCode));
    }

    if (!userLang) {
      userLang = 'en_US';
    }

    return this.translate.use(userLang).pipe(take(1)).toPromise();
  }

}
