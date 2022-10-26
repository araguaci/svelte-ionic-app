import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Radios</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Radio" }, {}, {})}</ion-buttons>
			<ion-title>Radio</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-list><ion-radio-group><ion-list-header><ion-label>Fruit</ion-label></ion-list-header>
				<ion-item><ion-label>Apple</ion-label>
					<ion-radio slot="${"start"}" color="${"success"}" value="${"apple"}"></ion-radio></ion-item>

				<ion-item><ion-label>Grape</ion-label>
					<ion-radio slot="${"start"}" color="${"tertiary"}" value="${"grape"}" checked></ion-radio></ion-item>

				<ion-item><ion-label>Cherry</ion-label>
					<ion-radio slot="${"start"}" color="${"danger"}" value="${"cherry"}"></ion-radio></ion-item></ion-radio-group>

			<ion-radio-group allow-empty-selection><ion-list-header><ion-label>Pizza Topping</ion-label></ion-list-header>
				<ion-item><ion-label>Beef</ion-label>
					<ion-radio slot="${"end"}" color="${"primary"}"></ion-radio></ion-item>

				<ion-item><ion-label>Anchovies</ion-label>
					<ion-radio slot="${"end"}" color="${"secondary"}" checked></ion-radio></ion-item>

				<ion-item><ion-label>Sausage</ion-label>
					<ion-radio slot="${"end"}" color="${"tertiary"}" name="${"sausage"}"></ion-radio></ion-item>

				<ion-item><ion-label>Bellpepper</ion-label>
					<ion-radio slot="${"end"}" color="${"success"}" value="${"tomato"}"></ion-radio></ion-item>

				<ion-item><ion-label>Tomato</ion-label>
					<ion-radio slot="${"end"}" color="${"warning"}" value="${"carrot"}"></ion-radio></ion-item>

				<ion-item><ion-label>Pepperoni</ion-label>
					<ion-radio slot="${"end"}" color="${"danger"}" checked></ion-radio></ion-item></ion-radio-group></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
