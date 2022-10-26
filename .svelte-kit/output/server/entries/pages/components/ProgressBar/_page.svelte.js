import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Progressbar</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "ProgressBar" }, {}, {})}</ion-buttons>
			<ion-title>Progress Bar</ion-title></ion-toolbar></ion-header>

	<ion-content class="${"outer-content"}">
		<ion-list><ion-list-header><ion-label>Default</ion-label></ion-list-header>
			<ion-progress-bar></ion-progress-bar></ion-list>

		<ion-list><ion-list-header><ion-label>Default at 50%</ion-label></ion-list-header>
			<ion-progress-bar value="${"0.5"}"></ion-progress-bar></ion-list>

		<ion-list><ion-list-header><ion-label>Colorized</ion-label></ion-list-header>
			
			<ion-progress-bar color="${"primary"}" value="${"0.5"}"></ion-progress-bar>
			<ion-progress-bar color="${"secondary"}" value="${"0.5"}"></ion-progress-bar>

			<ion-list-header><ion-label>Indeterminate</ion-label></ion-list-header>
			<ion-progress-bar type="${"indeterminate"}"></ion-progress-bar>

			<ion-list-header><ion-label>Indeterminate (reversed)</ion-label></ion-list-header>
			<ion-progress-bar type="${"indeterminate"}" reversed="${"true"}"></ion-progress-bar>

			<ion-list-header><ion-label>Buffer</ion-label></ion-list-header>
			<ion-progress-bar value="${"0.25"}" buffer="${"0.5"}"></ion-progress-bar></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
