import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Badge" }, {}, {})}</ion-buttons>
			<ion-title>Badges</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-list><ion-list-header>Badges</ion-list-header>
			<ion-item><ion-label>Followers</ion-label>
				<ion-badge slot="${"end"}">22k</ion-badge></ion-item>
			<ion-item><ion-label>Likes</ion-label>
				<ion-badge color="${"secondary"}" slot="${"end"}">118k</ion-badge></ion-item>
			<ion-item><ion-label>Stars</ion-label>
				<ion-badge color="${"tertiary"}" slot="${"end"}">34k</ion-badge></ion-item>
			<ion-item><ion-label>Completed</ion-label>
				<ion-badge color="${"success"}" slot="${"end"}">80</ion-badge></ion-item>
			<ion-item><ion-label>Warnings</ion-label>
				<ion-badge color="${"warning"}" slot="${"end"}">70</ion-badge></ion-item>
			<ion-item><ion-label>Notifications</ion-label>
				<ion-badge color="${"danger"}" slot="${"end"}">1000</ion-badge></ion-item>
			<ion-item><ion-label>Unread</ion-label>
				<ion-badge color="${"light"}" slot="${"end"}">24</ion-badge></ion-item>
			<ion-item><ion-label>Drafts</ion-label>
				<ion-badge color="${"medium"}" slot="${"end"}">14</ion-badge></ion-item>
			<ion-item><ion-label>Deleted</ion-label>
				<ion-badge color="${"dark"}" slot="${"end"}">4</ion-badge></ion-item></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
