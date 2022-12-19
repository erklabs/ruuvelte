import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Menu_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-b7lnrh a.svelte-b7lnrh{margin:10px;padding:10px;text-decoration:none;color:#000000;border:solid 2px;border-radius:7px}nav.svelte-b7lnrh a.svelte-b7lnrh:hover{color:#FFFFFF;background-color:#000000;border-color:#000000}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-b7lnrh"}"><a href="${"/"}" class="${"svelte-b7lnrh"}">Home</a>
        <a href="${"/about"}" class="${"svelte-b7lnrh"}">About</a>
        <a href="${"/projects"}" class="${"svelte-b7lnrh"}">Projects</a>
        <a href="${"/contact"}" class="${"svelte-b7lnrh"}">Contact</a></nav>

<hr>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<hr>
<footer><div>This is the footer</div>
</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
