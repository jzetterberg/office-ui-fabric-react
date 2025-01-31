import {
  fluentButton,
  fluentDivider,
  fluentCheckbox,
  fluentProgressRing,
  fluentNumberField,
  provideFluentDesignSystem,
} from '@fluentui/web-components';
import { StressApp } from '../../../components/wc/stressApp.wc';
import { StressComponent } from '../../../components/wc/stressComponent.wc';
import { StressContainer } from '../../../components/wc/stressContainer.wc';
import { getTestOptions } from '../../../shared/utils/testOptions';

const testOptions = getTestOptions();

document.querySelector('stress-app')?.setAttribute('numchildren', testOptions.numStartNodes.toString());

provideFluentDesignSystem().register(
  fluentButton(),
  fluentDivider(),
  fluentCheckbox(),
  fluentProgressRing(),
  fluentNumberField(),
);

typeof StressApp;
typeof StressComponent;
typeof StressContainer;
