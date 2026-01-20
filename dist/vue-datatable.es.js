import { createElementBlock as o, openBlock as n, createElementVNode as e, defineComponent as j, createVNode as w, unref as v, ref as x, watch as O, computed as m, createCommentVNode as C, normalizeClass as p, Fragment as $, renderList as S, toDisplayString as _, createBlock as R, withDirectives as z, vModelSelect as E, createTextVNode as F } from "vue";
const b = (r, t) => {
  const i = r.__vccOpts || r;
  for (const [f, u] of t)
    i[f] = u;
  return i;
}, I = {}, T = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  fill: "currentColor"
};
function U(r, t) {
  return n(), o("svg", T, [...t[0] || (t[0] = [
    e("circle", {
      cx: "10",
      cy: "10",
      r: "7",
      stroke: "currentColor",
      "stroke-width": "2",
      fill: "none"
    }, null, -1),
    e("line", {
      x1: "15",
      y1: "15",
      x2: "19",
      y2: "19",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round"
    }, null, -1)
  ])]);
}
const Y = /* @__PURE__ */ b(I, [["render", U]]), q = {}, G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
function H(r, t) {
  return n(), o("svg", G, [...t[0] || (t[0] = [
    e("path", {
      "fill-rule": "evenodd",
      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    }, null, -1)
  ])]);
}
const J = /* @__PURE__ */ b(q, [["render", H]]), K = {}, Q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  fill: "currentColor"
};
function W(r, t) {
  return n(), o("svg", Q, [...t[0] || (t[0] = [
    e("path", {
      d: "M15 18l-6-6 6-6",
      stroke: "currentColor",
      "stroke-width": "2",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, null, -1)
  ])]);
}
const X = /* @__PURE__ */ b(K, [["render", W]]), Z = {}, ee = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  fill: "currentColor"
};
function te(r, t) {
  return n(), o("svg", ee, [...t[0] || (t[0] = [
    e("path", {
      d: "M9 18l6-6-6-6",
      stroke: "currentColor",
      "stroke-width": "2",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, null, -1)
  ])]);
}
const re = /* @__PURE__ */ b(Z, [["render", te]]), ne = { class: "w-56 relative" }, oe = /* @__PURE__ */ j({
  __name: "SearchInput",
  emits: ["search"],
  setup(r, { emit: t }) {
    const i = t, f = (u) => {
      const d = u.target;
      i("search", d.value);
    };
    return (u, d) => (n(), o("div", ne, [
      d[0] || (d[0] = e("label", { class: "sr-only" }, "Search", -1)),
      e("input", {
        type: "text",
        placeholder: "Search",
        onInput: f,
        sty: "",
        class: "w-full text-sm border-none p-2 pl-9 rounded-md outline-none ring-1 ring-gray-300 focus:ring-black dark:bg-transparent dark:text-white dark:ring-gray-700 dark:focus:ring-white"
      }, null, 32),
      w(v(Y), { class: "absolute top-1/2 left-2 -translate-y-1/2 text-gray-400" })
    ]));
  }
}), ae = {}, le = { class: "flex items-center justify-center" };
function se(r, t) {
  return n(), o("div", le, [...t[0] || (t[0] = [
    e("div", { class: "w-10 h-10 border-4 border-gray-300 border-t-black dark:border-gray-800 dark:border-t-gray-300 rounded-full animate-spin" }, null, -1)
  ])]);
}
const ie = /* @__PURE__ */ b(ae, [["render", se]]), de = { class: "w-full" }, ce = { class: "mb-4 p-2" }, ue = { class: "text-sm p-3 text-left uppercase font-semibold whitespace-nowrap" }, ge = ["onClick"], he = { class: "pt-4" }, pe = {
  key: 0,
  class: "text-center dark:text-neutral-white py-4"
}, ve = {
  key: 0,
  class: "mt-4"
}, fe = { class: "flex justify-center md:justify-end gap-4 flex-wrap" }, we = { class: "relative" }, be = { class: "absolute inset-y-0 right-0 flex items-center px-1 pointer-events-none" }, me = { class: "flex dark:text-white border border-gray-300 dark:border-gray-600 rounded-md shadow-sm" }, _e = { class: "py-2 px-3 text-center inline-block text-xs md:text-sm border-r border-gray-300 dark:border-gray-600" }, ke = { class: "font-semibold" }, ye = ["disabled"], xe = ["disabled"], $e = /* @__PURE__ */ j({
  __name: "Datatable",
  props: {
    headings: {},
    data: {},
    verticalSpacing: {},
    scrollable: { type: Boolean },
    pagination: { type: Boolean },
    paginationMode: {},
    loading: { type: Boolean }
  },
  emits: ["onRowClicked"],
  setup(r, { emit: t }) {
    const i = r, f = t, u = (a) => {
      let l;
      switch (a) {
        case "narrow":
          l = "py-2";
          break;
        case "wide":
          l = "py-6";
          break;
        default:
          l = "py-4";
      }
      return l;
    }, d = x(""), c = x(5), s = x(1);
    O([c, d], () => {
      s.value = 1;
    });
    const M = (a) => {
      d.value = a;
    }, g = m(() => d.value !== "" ? i.data.filter((a) => Object.values(a).some((l) => String(l).toLowerCase().includes(d.value.toLowerCase()))) : i.data), k = m(() => Math.ceil(g.value.length / c.value)), y = m(() => {
      if (i.pagination) {
        const a = (s.value - 1) * c.value;
        return g.value.slice(a, a + c.value);
      }
      return g.value;
    }), D = () => {
      s.value > 1 && s.value--;
    }, L = () => {
      s.value < k.value && s.value++;
    }, P = m(() => {
      if (g.value.length === 0)
        return "0 - 0";
      const a = (s.value - 1) * c.value + 1, l = Math.min(a + c.value - 1, g.value.length);
      return `${a} - ${l}`;
    }), N = (a) => {
      f("onRowClicked", a);
    };
    return (a, l) => (n(), o("div", de, [
      e("div", ce, [
        w(v(oe), { onSearch: M })
      ]),
      e("div", {
        class: p(["overflow-auto", r.scrollable ? "max-h-112.5" : null])
      }, [
        e("table", {
          class: p(["w-full dark:text-white", y.value.length === 0 ? "md:table-fixed" : null])
        }, [
          e("thead", {
            class: p([r.scrollable ? "sticky top-0 shadow-sm shadow-gray-100 dark:shadow-gray-800 bg-white dark:bg-black" : null])
          }, [
            e("tr", null, [
              (n(!0), o($, null, S(r.headings, (h) => (n(), o("th", ue, _(h), 1))), 256))
            ])
          ], 2),
          e("tbody", null, [
            (n(!0), o($, null, S(y.value, (h, V) => (n(), o("tr", {
              key: V,
              onClick: (B) => N(h),
              class: "hover:bg-gray-50 cursor-pointer border-y border-gray-100 dark:border-gray-800 dark:hover:bg-gray-50/5 whitespace-nowrap"
            }, [
              (n(!0), o($, null, S(Object.values(h), (B, A) => (n(), o("td", {
                key: A,
                class: p(["text-sm p-3 font-light", u(i.verticalSpacing)])
              }, _(B), 3))), 128))
            ], 8, ge))), 128))
          ])
        ], 2)
      ], 2),
      e("div", he, [
        y.value.length === 0 && !r.loading ? (n(), o("p", pe, "No data")) : C("", !0),
        r.loading ? (n(), R(v(ie), { key: 1 })) : C("", !0)
      ]),
      r.pagination ? (n(), o("div", ve, [
        e("div", fe, [
          e("div", we, [
            z(e("select", {
              "onUpdate:modelValue": l[0] || (l[0] = (h) => c.value = h),
              class: "hover:cursor-pointer appearance-none block px-3 pr-5 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-midtone focus:border-primary-midtone dark:bg-darkmode-background dark:text-neutral-white dark:border-gray-600 dark:focus:ring-neutral-white dark:focus:border-neutral-white text-xs md:text-sm"
            }, [...l[1] || (l[1] = [
              e("option", { value: "5" }, "5 per page", -1),
              e("option", { value: "10" }, "10 per page", -1),
              e("option", { value: "15" }, "15 per page", -1),
              e("option", { value: "20" }, "20 per page", -1)
            ])], 512), [
              [
                E,
                c.value,
                void 0,
                { number: !0 }
              ]
            ]),
            e("div", be, [
              w(v(J), { class: "h-4 w-4 text-gray-500" })
            ])
          ]),
          e("div", me, [
            e("span", _e, [
              e("span", ke, _(P.value), 1),
              F(" of " + _(g.value.length), 1)
            ]),
            e("span", null, [
              e("button", {
                class: p(["w-8 h-full mr-0.5 disabled:opacity-50 not-disabled:cursor-pointer", s.value !== 1 ? "hover:bg-gray-100 dark:hover:bg-gray-100/5" : null]),
                onClick: D,
                disabled: s.value === 1
              }, [
                w(v(X))
              ], 10, ye),
              e("button", {
                class: p(["w-8 h-full rounded-r-md disabled:opacity-50 not-disabled:cursor-pointer", s.value !== k.value ? "hover:bg-gray-100 dark:hover:bg-gray-100/5" : null]),
                onClick: L,
                disabled: s.value === k.value
              }, [
                w(v(re))
              ], 10, xe)
            ])
          ])
        ])
      ])) : C("", !0)
    ]));
  }
});
export {
  $e as default
};
