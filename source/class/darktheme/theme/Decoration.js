/* ************************************************************************

   Copyright:
     2021 Norbert Schröder

   License:
     MIT

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Theme.define("darktheme.theme.Decoration",
{
  aliases: {
    decoration: "darktheme/decoration"
  },

  decorations :
  {
    /*
    ---------------------------------------------------------------------------
      APPLICATION
    ---------------------------------------------------------------------------
    */

    "app-header":
    {
      style: {
        startColor: "app-header-start",
        endColor: "app-header-end",
        startColorPosition: 20,
        endColorPosition: 80,
        backgroundImage: "decoration/application/app-header.jpg"
      }
    },

    "app-logo":
    {
      include: "button",

      style: {
        radius: 45,
        shadowLength: 0,
        shadowBlurRadius: 10,
        shadowColor: "shadow"
      }
    },

    "app-background":
    {
      style: {
        backgroundColor: "background-application"
      }

    },

    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */

    "button":
    {
      style: {
        borderImage: "decoration/button/button.png",
        slice: 5
      }
    },

    "button-disabled":
    {
      include: "button",

      style: {
        borderImage: "decoration/button/button-disabled.png",
        shadowBlurRadius: 0
      }
    },

    "button-hovered":
    {
      include: "button",

      style: {
        borderImage: "decoration/button/button-hovered.png"
      }
    },

    "button-pressed":
    {
      include: "button",

      style: {
        borderImage: "decoration/button/button-pressed.png"
      }
    },

    "button-focused":
    {
      include: "button",

      style: {
        color: "text-hovered"
      }
    },

    "button-checked":
    {
      include: "button-pressed",

      style: {

      }
    },

    "button-checked-hovered":
    {
      include: "button-checked",

      style: {
        endColor: "button-end-checked-hovered"
      }
    },

    "button-checked-focused":
    {
      include: "button-checked"
    },

    "button-checked-disabled":
    {
      include: "button-pressed",

      style: {
        borderImage: "decoration/button/button-pressed-disabled.png"
      }
    },

    "button-invalid":
    {
      include: "button",

      style: {
        borderImage: "decoration/button/button-invalid.png"
      }
    },

    "button-disabled-invalid":
    {
      include: "button-disabled",

      style: {
        color: "border-invalid"
      }
    },

    "button-hovered-invalid":
    {
      include: "button-hovered",

      style: {
        color: "border-invalid"
      }
    },

    "button-checked-invalid":
    {
      include: "button-checked",

      style: {
        borderImage: "decoration/button/button-pressed-invalid.png"
      }
    },

    "button-pressed-invalid":
    {
      include: "button-pressed",

      style: {
        borderImage: "decoration/button/button-pressed-invalid.png"
      }
    },

    "button-focused-invalid":
    {
      include: "button-focused",

      style: {
        color: "border-invalid"
      }
    },

    "button-checked-focused-invalid":
    {
      include: "button-checked-focused",

      style: {
        borderImage: "decoration/button/button-pressed-invalid.png"
      }
    },

    "button-simple":
    {
      style:
      {
		radius: 2,

		width: 1,
		color: "border-button",

        backgroundImage: "decoration/button/button-simple.png",
        backgroundRepeat: "scale"
      }
    },

    "button-simple-checked":
    {
	  include: "button-simple",

      style:
      {
        backgroundImage: "decoration/button/button-simple-pressed.png"
      }
    },

    "button-simple-hovered":
    {
	  include: "button-simple",

      style:
      {
        backgroundImage: "decoration/button/button-simple-hovered.png"
      }
    },

    "button-simple-disabled":
    {
	  include: "button-simple",

      style:
      {
        backgroundImage: "decoration/button/button-simple-disabled.png"
      }
    },

    "button-simple-invalid":
    {
	  include: "button-simple",

      style:
      {
        color: "border-invalid"
      }
    },

    "button-simple-checked-disabled":
    {
	  include: "button-simple",

      style:
      {
        backgroundImage: "decoration/button/button-simple-pressed-disabled.png"
      }
    },

    "splitbutton":
    {
      style:
      {
        borderImage: "decoration/button/split-button.png",
        slice: 5
      }
    },

    "splitbutton-checked":
    {
      style:
      {
        borderImage: "decoration/button/split-button-pressed.png",
        slice: 5
      }
    },

    "splitbutton-hovered":
    {
      style:
      {
        borderImage: "decoration/button/split-button-hovered.png",
        slice: 5
      }
    },

    "splitbutton-disabled":
    {
      style:
      {
        borderImage: "decoration/button/split-button-disabled.png",
        slice: 5
      }
    },

    "splitbutton-right":
    {
      style:
      {
        borderImage: "decoration/button/split-button-right.png",
        slice: 5
      }
    },

    "splitbutton-right-checked":
    {
      style:
      {
        borderImage: "decoration/button/split-button-right-pressed.png",
        slice: 5
      }
    },

    "splitbutton-right-hovered":
    {
      style:
      {
        borderImage: "decoration/button/split-button-right-hovered.png",
        slice: 5
      }
    },

    "splitbutton-right-disabled":
    {
      style:
      {
        borderImage: "decoration/button/split-button-right-disabled.png",
        slice: 5
      }
    },

    /*
    ---------------------------------------------------------------------------
      CHECK BOX
    ---------------------------------------------------------------------------
    */

    "checkbox":
    {
      include: "button-simple",

      style: {
        width: 1,
        color: "border-button",

        shadowColor: "shadow",
        shadowLength: 0,
        shadowBlurRadius: 2
      }
    },

    "checkbox-checked":
    {
      include: "checkbox",

      style: {
        backgroundImage: "decoration/button/button-simple-pressed.png"
      }
    },

    "checkbox-hovered":
    {
      include: "checkbox",

      style: {
        backgroundImage: "decoration/button/button-simple-hovered.png"
      }
    },

    "checkbox-checked-hovered":
    {
      include: "checkbox-checked"
    },

    "checkbox-focused":
    {
      include: "checkbox"
    },

    "checkbox-checked-focused":
    {
      include: "checkbox-checked"
    },

    "checkbox-disabled":
    {
      include: "button-simple-disabled",

      style: {
        color: "border-button-disabled",
        shadowBlurRadius: 0
      }
    },

    "checkbox-checked-disabled":
    {
      include: "button-simple-checked-disabled"
    },

    "checkbox-invalid":
    {
      include: "checkbox",

      style: {
        color: "border-invalid",
        shadowColor: "border-invalid"
      }
    },

    "checkbox-checked-invalid":
    {
      include: "checkbox-checked",

      style: {
        shadowColor: "border-invalid",
        endColor: "border-invalid"
      }
    },

    "checkbox-hovered-invalid":
    {
      include: "checkbox-hovered",

      style: {
        color: "text-invalid",
        innerColor: "checkbox-hovered-inner-invalid",
        backgroundColor: "checkbox-hovered-invalid"
      }
    },

    "checkbox-focused-invalid":
    {
      include: "checkbox-focused",

      style: {
        color: "text-invalid",
        shadowColor: "text-invalid"
      }
    },

    "checkbox-undetermined":
    {
      include: "checkbox",

      style: {
        backgroundImage: "decoration/checkbox/undetermined.png"
      }
    },

    "checkbox-undetermined-disabled":
    {
      include: "checkbox",

      style: {
        backgroundImage: "decoration/checkbox/undetermined-disabled.png"
      }
    },

    "checkbox-undetermined-hovered":
    {
      include: "checkbox",

      style: {
        backgroundImage: "decoration/checkbox/undetermined-hovered.png"
      }
    },

    "checkbox-undetermined-invalid":
    {
      include: "checkbox-invalid",

      style: {
        backgroundImage: "decoration/checkbox/undetermined.png"
      }
    },

    "checkbox-undetermined-focused":
    {
      include: "checkbox-focused",

      style: {
        backgroundImage: "decoration/checkbox/undetermined.png"
      }
    },

    /*
    ---------------------------------------------------------------------------
      COMBOBOX
    ---------------------------------------------------------------------------
    */

    "combobox-button":
    {
      include: "button",

      style: {
        radius: 1
      }
    },

    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    "border-invalid":
    {
      include: "input",

      style: {
        color: "border-invalid"
      }
    },

    "dragover":
    {
      style: {
        bottom: [2, "solid", "border-dragover"]
      }
    },

    "keyboard-focus":
    {
      style: {
        width: 1,
        color: "keyboard-focus",
        style: "dotted"
      }
    },

    "main":
    {
      style: {
        radius: 3,
        width: 1,
        color: "border-window"
      }
    },

    "pane":
    {
      include: "input"
    },

    "selected":
    {
      style: {
        backgroundColor: "background-selected"
      }
    },

    /*
    ---------------------------------------------------------------------------
      GROUPBOX
    ---------------------------------------------------------------------------
    */
    "group":
    {
      style:
      {
        borderImage: "decoration/form/groupbox.png",
        slice: 4
      }
    },

    "group-focused":
    {
      style:
      {
        borderImage: "decoration/form/groupbox-focused.png",
        slice: 4
      }
    },

    /*
    ---------------------------------------------------------------------------
      IFRAME
    ---------------------------------------------------------------------------
    */

    "iframe":
    {
      include: "input"
    },

    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */

    "menu" :
    {
      style:
      {
		radius: 3,
		width: 1,
		color: "border-menu",
		shadowColor: "shadow",
		shadowBlurRadius: 5,
		shadowLength: 0,
        backgroundImage: "decoration/menu/menu-pane-c.png",
        backgroundRepeat: "scale"
      }
    },

    "menu-button-selected" :
    {
      style:
      {
        backgroundImage: "decoration/menu/button-selected.png",
        backgroundRepeat: "scale"
      }
    },

    "menu-button-red" :
    {
      style:
      {
        backgroundImage: "decoration/menu/button-red.png",
        backgroundRepeat: "scale"
      }
    },

    "menu-separator" :
    {
      style:
      {
        widthTop    : 1,
        colorTop    : "black",

        widthBottom : 1,
        colorBottom : "gray"
      }
    },

    /*
    ---------------------------------------------------------------------------
      MENU BAR
    ---------------------------------------------------------------------------
    */

    "menubar":
    {
      style: {
        backgroundImage: "decoration/bar/background.png",
		backgroundRepeat: "scale"
      }
    },

    "menubar-selected":
    {
      style:
      {
	    backgroundImage: "decoration/bar/background-selected.png",
		backgroundRepeat: "scale"
      }
    },

    /*
    ---------------------------------------------------------------------------
      POPUP
    ---------------------------------------------------------------------------
    */

    "popup":
    {
	  include: "input"
    },

    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */

    "progressbar":
    {
      style: {
        radius: 10,
        width: 1,
        color: "border-progressbar",
        startColor: "progressbar-start",
        endColor: "progressbar-end",
        startColorPosition: 1,
        endColorPosition: 90
      }
    },

    "progressbar-progress":
    {
	  include: "button-simple-checked",

	  style: {
		radius: 10
	  }
	},

    "progressbar-progress-disabled":
    {
      include: "scrollbar-slider-horizontal-disabled",

      style: {
        radius: 10
      }
    },

    /*
    ---------------------------------------------------------------------------
      PROGRESSIVE
    ---------------------------------------------------------------------------
    */

    "progressive-table-header":
    {
       style: {
         width: 1,
         color: "border-main",
         style: "solid"
       }
    },

    "progressive-table-header-cell":
    {
      style: {
        gradientStart: ["table-header-start", 10],
        gradientEnd: ["table-header-end", 90],

        widthRight: 1,
        colorRight: "progressive-table-header-border-right"
      }
    },

    /*
    ---------------------------------------------------------------------------
      RADIO BUTTON
    ---------------------------------------------------------------------------
    */

    "radiobutton":
    {
      include: "button-simple",

      style: {
        radius: 15,
        width: 1,
        color: "border-button",

        shadowColor: "shadow",
        shadowLength: 0,
        shadowBlurRadius: 2
      }
    },

    "radiobutton-hovered":
    {
      include: "radiobutton",

      style: {
        backgroundImage: "decoration/button/button-simple-hovered.png"
      }
    },

    "radiobutton-checked":
    {
      include: "radiobutton",

      style: {
        backgroundImage: "decoration/button/button-simple-pressed.png"
      }
    },

    "radiobutton-checked-hovered":
    {
      include: "radiobutton-checked",

      style: {
        endColor: "text-hovered"
      }
    },

    "radiobutton-checked-focused":
    {
      include: "radiobutton-checked",

      style: {
        endColor: "text-hovered"
      }
    },

    "radiobutton-focused":
    {
      include: "radiobutton",

      style: {
        shadowBlurRadius: 4
      }
    },

    "radiobutton-disabled":
    {
      include: "button-simple-disabled",

      style: {
        radius: 15
      }
    },

    "radiobutton-checked-disabled":
    {
      include: "button-simple-checked-disabled",

      style: {
        radius: 15
      }
    },

    "radiobutton-invalid":
    {
      include: "button-simple-invalid",

      style: {
        radius: 15,
        shadowBlurRadius: 2
      }
    },

    "radiobutton-checked-invalid":
    {
      include: "radiobutton-checked",

      style: {
        shadowColor: "border-invalid",
        endColor: "border-invalid"
      }
    },

    "radiobutton-checked-focused-invalid":
    {
      include: "radiobutton-checked-focused",

      style: {
        color: "text-invalid",
        shadowColor: "text-invalid"
      }
    },

    "radiobutton-checked-hovered-invalid":
    {
      include: "radiobutton-checked-hovered",

      style: {
        color: "text-invalid",
        innerColor: "radiobutton-hovered-invalid"
      }
    },

    "radiobutton-focused-invalid":
    {
      include: "radiobutton-focused",

      style: {
        color: "text-invalid",
        shadowColor: "text-invalid"
      }
    },

    "radiobutton-hovered-invalid":
    {
      include: "radiobutton-hovered",

      style: {
        color: "text-invalid",
        innerColor: "radiobutton-hovered-invalid",
        backgroundColor: "radiobutton-hovered-invalid"
      }
    },

    /*
    ---------------------------------------------------------------------------
      SCROLLBAR
    ---------------------------------------------------------------------------
    */

    "scrollbar-horizontal":
    {
      style:
      {
        backgroundImage: "decoration/scrollbar/scrollbar-bg-horizontal.png",
        backgroundRepeat: "repeat-x"
      }
    },

    "scrollbar-vertical":
    {
      style:
      {
        backgroundImage: "decoration/scrollbar/scrollbar-bg-vertical.png",
        backgroundRepeat: "repeat-y"
      }
    },

    "scrollbar-slider":
    {
	    style: {
        radius: 15
      }
    },

	  "scrollbar-slider-horizontal":
    {
	    include: "scrollbar-slider",

      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-slider-horizontal.png",
        backgroundRepeat: "scale"
      }
    },

	  "scrollbar-slider-horizontal-hovered":
    {
	    include: "scrollbar-slider",

      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-slider-horizontal-hovered.png",
        backgroundRepeat: "scale"
      }
    },

    "scrollbar-slider-horizontal-disabled":
    {
      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-bg-horizontal.png",
        backgroundRepeat: "scale",

        width: 1,
        color: "border-disabled",
        innerColor: "white",
        innerOpacity: 0.3
      }
    },

	  "scrollbar-slider-vertical":
    {
	    include: "scrollbar-slider",

      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-slider-vertical.png",
        backgroundRepeat: "scale"
      }
    },

	  "scrollbar-slider-vertical-hovered":
    {
	    include: "scrollbar-slider",

      style: {
        backgroundImage : "decoration/scrollbar/scrollbar-slider-vertical-hovered.png",
        backgroundRepeat : "scale"
      }
    },

    "scrollbar-slider-vertical-disabled":
    {
	  include: "scrollbar-slider-horizontal-disabled",

      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-bg-vertical.png"
      }
    },

    "scrollbar-button-horizontal-left":
    {
      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-horizontal-left.png",
        backgroundRepeat: "scale"
      }
    },

    "scrollbar-button-horizontal-left-hovered":
    {
      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-horizontal-left-hovered.png",
        backgroundRepeat: "scale"
      }
    },

    "scrollbar-button-horizontal-right":
    {
      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-horizontal-right.png",
        backgroundRepeat: "scale"
      }
    },

    "scrollbar-button-horizontal-right-hovered":
    {
      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-horizontal-right-hovered.png",
        backgroundRepeat: "scale"
      }
    },

    "scrollbar-button-vertical-up":
    {
      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-vertical-up.png",
        backgroundRepeat: "scale"
      }
    },

    "scrollbar-button-vertical-up-hovered":
    {
      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-vertical-up-hovered.png",
        backgroundRepeat: "scale"
      }
    },

    "scrollbar-button-vertical-down":
    {
      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-vertical-down.png",
        backgroundRepeat: "scale"
      }
    },

    "scrollbar-button-vertical-down-hovered":
    {
      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-vertical-down-hovered.png",
        backgroundRepeat: "scale"
      }
    },

    /*
    ---------------------------------------------------------------------------
      SEPARATOR
    ---------------------------------------------------------------------------
    */

    "separator-horizontal":
    {
      style: {
        widthLeft: 1,
        colorLeft: "border-separator"
      }
    },

    "separator-vertical":
    {
      style: {
        widthTop: 1,
        colorTop: "border-separator"
      }
    },

    /*
    ---------------------------------------------------------------------------
      SLIDEBAR
    ---------------------------------------------------------------------------
    */

    "slidebar-button":
    {
      include: "tabview-page-button-inactive"
    },

    "slidebar-button-hovered":
    {
      include: "tabview-page-button-hovered"
    },

    "slidebar-button-pressed":
    {
      include: "button-checked"
    },

    /*
    ---------------------------------------------------------------------------
      SLIDER
    ---------------------------------------------------------------------------
    */

    "slider-horizontal":
    {
      style: {
        backgroundImage: "decoration/slider/slider-horizontal.png",
        backgroundRepeat: "repeat-x",
        colorTop: "transparent",
        widthTop: 5
      }
    },

    "slider-vertical":
    {
      style: {
        backgroundImage: "decoration/slider/slider-vertical.png",
        backgroundRepeat: "repeat-y"
      }
    },

    "slider-knob":
    {
      include: "radiobutton"
    },

    "slider-knob-hovered":
    {
      include: "radiobutton-hovered"
    },

    "slider-knob-pressed":
    {
      include: "radiobutton-checked"
    },

    "slider-knob-disabled":
    {
      include: "radiobutton-disabled"
    },

    /*
    ---------------------------------------------------------------------------
      SPLITPANE
    ---------------------------------------------------------------------------
    */

    "splitpane":
    {
      style: {
        backgroundColor : "background-splitpane",

        width : 1,
        color : "transparent",
        style: "solid"
      }
    },

    /*
    ---------------------------------------------------------------------------
      SPLITTER
    ---------------------------------------------------------------------------
    */

    "splitter-knob-horizontal":
    {
      include: "scrollbar-slider-horizontal-pressed",

      style: {
        shadowBlurRadius: 0
      }
    },

    "splitter-knob-vertical":
    {
      include: "scrollbar-slider-vertical-pressed",

      style: {
        shadowBlurRadius: 0
      }
    },

    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */

    "table":
    {
      style:
      {
        width: 1,
        color: "border-main",
        style: "solid"
      }
    },

	"table-header-cell":
    {
      style:
      {
		backgroundImage: "decoration/bar/background.png",
		backgroundRepeat: "scale",

		widthRight : 1,
		colorRight: "#525252",
        styleRight : "solid"
      }
    },

    "table-header-cell-hovered" :
    {
      style:
      {
        widthRight : 1,
        colorRight : "border-separator",
        styleRight : "solid",

        widthBottom : 1,
        colorBottom : "white",
        styleBottom : "solid"
      }
    },

	"table-header-cell-selected":
    {
      style:
      {
	    backgroundImage: "decoration/bar/background-selected.png",
		backgroundRepeat: "scale"
      }
    },

    "table-column-button" :
    {
      style:
      {
        backgroundImage  : "decoration/table/header-cell.png",
        backgroundRepeat : "scale",

        widthBottom : 1,
        colorBottom : "border-main",
        style       : "solid"
      }
    },

	"table-scroller-header":
    {
      style:
      {
        backgroundImage: "decoration/bar/background.png",
		backgroundRepeat: "scale"
      }
    },

    "table-scroller-focus-indicator" :
    {
      style:
      {
        width : 2,
        color : "table-focus-indicator",
        style: "solid"
      }
    },

	"table-statusbar":
    {
      style:
      {
	    backgroundColor: "background-window",

        widthTop: 1,
        colorTop: "#525252",
        style: "solid",

		innerWidthTop: 1,
        innerColorTop: "silver"
      }
    },

    /*
    ---------------------------------------------------------------------------
      TABVIEW
    ---------------------------------------------------------------------------
    */

    "tabview":
	{
      style:
      {
        backgroundImage: "decoration/bar/background.png",
		backgroundRepeat: "scale"
      }
	},

	"tabview-button-top":
	{
	  include: "button-simple",

	  style:
	  {
		radius: [3, 3, 0, 0],

		width: 1,
	    color: "border-tabview-button-active"
	  }
	},

	"tabview-button-top-hovered":
	{
	  include: "tabview-button-top",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-hovered.png"
	  }
	},

	"tabview-button-top-checked":
	{
	  include: "tabview-button-top",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-pressed.png"
	  }
	},

	"tabview-button-top-disabled":
	{
	  include: "tabview-button-top",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-disabled.png"
	  }
	},

	"tabview-button-bottom":
	{
	  include: "tabview-button-top",

	  style:
	  {
		radius: [0, 0, 3, 3],

	    backgroundImage: "decoration/button/button-simple.png"
	  }
	},

	"tabview-button-bottom-hovered":
	{
	  include: "tabview-button-bottom",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-hovered.png"
	  }
	},

	"tabview-button-bottom-checked":
	{
	  include: "tabview-button-bottom",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-pressed.png"
	  }
	},

	"tabview-button-bottom-disabled":
	{
	  include: "tabview-button-bottom",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-disabled.png"
	  }
	},


	"tabview-button-left":
	{
	  include: "tabview-button-top",

	  style:
	  {
		radius: [3, 0, 0, 3],

	    backgroundImage: "decoration/button/button-simple.png"
	  }
	},

	"tabview-button-left-hovered":
	{
	  include: "tabview-button-left",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-hovered.png"
	  }
	},

	"tabview-button-left-checked":
	{
	  include: "tabview-button-left",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-pressed.png"
	  }
	},

	"tabview-button-left-disabled":
	{
	  include: "tabview-button-left",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-disabled.png"
	  }
	},

	"tabview-button-right":
	{
	  include: "tabview-button-top",

	  style:
	  {
		radius: [0, 3, 3, 0],

	    backgroundImage: "decoration/button/button-simple.png"
	  }
	},

	"tabview-button-right-hovered":
	{
	  include: "tabview-button-right",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-hovered.png"
	  }
	},

	"tabview-button-right-checked":
	{
	  include: "tabview-button-right",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-pressed.png"
	  }
	},

	"tabview-button-right-disabled":
	{
	  include: "tabview-button-right",

	  style:
	  {
	    backgroundImage: "decoration/button/button-simple-disabled.png"
	  }
	},

    /*
    ---------------------------------------------------------------------------
      TEXT FIELD
    ---------------------------------------------------------------------------
    */

    "input" :
    {
      style:
      {
        borderImage: "decoration/form/display.png",
        slice: 4
      }
    },

    "input-focused":
    {
      style:
      {
        borderImage: "decoration/form/display-blue.png",
        slice: 4
      }
    },

    "input-disabled":
    {
      style:
      {
        borderImage: "decoration/form/display-gray.png",
        slice: 4
      }
    },

    "input-error":
    {
      style:
      {
        borderImage: "decoration/form/input-error.png",
        slice: 4
      }
    },

    "input-invalid":
    {
      style:
      {
        borderImage: "decoration/form/input-invalid.png",
        slice: 4
      }
    },

    "input-focused-invalid":
    {
      style:
      {
        borderImage: "decoration/form/input-error.png",
        slice: 4
      }
    },

    /*
    ---------------------------------------------------------------------------
      TOOLBAR
    ---------------------------------------------------------------------------
    */

    "toolbar":
    {
      style:
      {
        backgroundImage: "decoration/toolbar/toolbar-black.png",
        backgroundRepeat: "scale"
      }
    },

    "toolbar-blank" :
    {
      style:
      {
        backgroundColor: "transparent",

        width: 1,
        color: "transparent",
        colorBottom: "border-separator",

        style: "solid"
      }
    },

    "toolbar-light":
    {
      style:
      {
        backgroundImage: "decoration/bar/background.png",
        backgroundRepeat: "scale"
      }
    },

    "toolbar-separator":
    {
      style:
      {
        widthLeft : 1,
        widthRight : 1,

        colorLeft: "#525252",
        colorRight: "silver",

        styleLeft : "solid",
        styleRight : "solid"
      }
    },

    "toolbar-button-checked":
    {
      style:
      {
        backgroundImage: "decoration/button/button-simple-pressed.png",
        backgroundRepeat : "scale",

        width: 1,

        colorTop: "#323232",
        colorLeft: "#323232",
        colorBottom: "#929292",
        colorRight: "#929292",

        style: "solid"
      }
    },

    "toolbar-button-checked-disabled":
    {
	  include: "toolbar-button-checked",

      style:
      {
        backgroundImage: "decoration/button/button-simple-pressed-disabled.png"
      }
    },

    "toolbar-button-hovered" :
    {
      style:
      {
        backgroundImage: "decoration/button/button-simple-hovered.png",
        backgroundRepeat : "scale"
      }
    },


    "toolbar-splitbutton-hovered":
    {
      style:
      {
        backgroundImage: "decoration/button/button-simple-hovered.png",
        backgroundRepeat: "scale",

        widthRight: 1,
        colorRight: "#525252",
        styleRight: "solid"
      }
    },

    "toolbar-splitbutton-arrow-hovered":
    {
      style:
      {
        backgroundImage: "decoration/button/button-simple-hovered.png",
        backgroundRepeat: "scale",

        widthLeft: 1,
        colorLeft: "silver",
        styleLeft: "solid"
      }
    },

    /*
    ---------------------------------------------------------------------------
      TOOLTIP
    ---------------------------------------------------------------------------
    */

    "tooltip-error":
    {
      style: {
        backgroundColor: "tooltip-error",
        radius: 4,
        shadowColor: "shadow",
        shadowBlurRadius: 2,
        shadowLength: 1
      }
    },

    /*
    ---------------------------------------------------------------------------
      VIRTUAL WIDGETS
    ---------------------------------------------------------------------------
    */

    "group-item":
    {
      style: {
        startColor: "groupitem-start",
        endColor: "groupitem-end",
        startColorPosition: 0,
        endColorPosition: 100

      }
    },

    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */

    "window-active":
    {
      style: {
        radius: 5,
        width: 1,
        color: "border-window",
        shadowBlurRadius: 10,
        shadowLength: 0,
        shadowColor: "shadow-window",
        backgroundImage: "decoration/window/window-pane.png",
        backgroundRepeat: "scale"
      }
    },

    "window-inactive":
    {
      include: "window-active",

      style:
      {
        shadowBlurRadius: 5
      }
    },

    "window-captionbar-active":
    {
      style:
      {
		backgroundImage: "decoration/window/captionbar-active.png",
        backgroundRepeat: "scale",

        widthBottom: 1,
        colorBottom: "border-captionbar-active-bottom"
      }
    },

	"window-captionbar-inactive":
    {
      style:
      {
		backgroundImage: "decoration/window/captionbar-inactive.png",
        backgroundRepeat: "scale",

        widthBottom: 1,
        colorBottom: "border-captionbar-inactive-bottom"
      }
    },

	"window-statusbar" :
    {
      style: {
        backgroundImage : "decoration/window/statusbar.png",
        backgroundRepeat: "scale",

        widthTop: 1,
        colorTop: "border-statusbar-top",
        innerWidthTop: 1,
        innerColorTop: "border-statusbar-top-inner"
      }
    }

  }
});
