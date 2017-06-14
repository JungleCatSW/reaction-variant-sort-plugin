import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Products Sort",
  name: "product-variant-sort",
  icon: "fa fa-cubes",
  autoEnable: true,
  registry: [{
    route: "/tag/:slug?",
    name: "tag",
    template: "productssort",
    workflow: "coreProductWorkflow"
  }],
  layout: [ {
    layout: "coreLayout",
    workflow: "coreProductGridWorkflow",
    collection: "Products",
    theme: "default",
    priority: 1,
    enabled: true,
    structure: {
      template: "productssort",
      layoutHeader: "layoutHeader",
      layoutFooter: "",
      notFound: "productNotFound",
      dashboardHeader: "gridPublishControls",
      dashboardControls: "productDetailDashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
