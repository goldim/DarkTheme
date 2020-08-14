/* ************************************************************************

   Copyright:
     2010-2015 Norbert Schröder

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

/**
 * The DarkTheme appearance theme.
 *
 * @asset(darktheme/*)
 * 
 * @asset(qx/icon/Oxygen/16/apps/office-calendar.png)
 * @asset(qx/icon/Oxygen/16/mimetypes/office-document.png)
 * @asset(qx/icon/Oxygen/16/places/folder.png)
 * @asset(qx/icon/Oxygen/16/places/folder-open.png)
 * @asset(qx/icon/Oxygen/22/mimetypes/office-document.png)
 * @asset(qx/icon/Oxygen/22/places/folder.png)
 * @asset(qx/icon/Oxygen/22/places/folder-open.png)
 * @asset(qx/icon/Oxygen/32/mimetypes/office-document.png)
 * @asset(qx/icon/Oxygen/32/places/folder.png)
 * @asset(qx/icon/Oxygen/32/places/folder-open.png)
 * 
 */
 
qx.Theme.define("darktheme.theme.Appearance",
{
  aliases: {
    decoration: "darktheme/decoration"
  },
  
  appearances:
  {
    /*
    ---------------------------------------------------------------------------
      APPLICATION
    ---------------------------------------------------------------------------
    */

    "app-header":
    {
      style: function(states)
      {
        return {
          font: "bold",
          textColor: "text-app-header",
          padding: [8, 12],
          decorator: "app-header"
        };
      }
    },

    "app-header-label": "label",

    "app-splitpane":
    {
      alias: "splitpane",
      
      style: function(states)
      {
        return {
          padding: 0
        };
      }
    },
    
    "app-logo":
    {
      include: "app-header",
      
      style: function(states)
      {
        return {
          font: "headline",
          decorator: "app-logo"
        }
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */

    "button-frame":
    {
      alias: "atom",

      style: function(states)
      {
        var decorator, textColor;

        if (states.checked && states.focused && !states.inner)
        {
          decorator = states.disabled ? "button-checked-disabled" : "button-checked";
          textColor = undefined;
        }
        else if (states.pressed)
        {
          decorator = states.disabled ? "button-checked-disabled" : "button-checked";
          textColor = "text-hovered";
        }
        else if (states.checked)
        {
          decorator = states.disabled ? "button-checked-disabled" : 
                      states.invalid ? "button-checked-invalid" : "button-checked";
          textColor = undefined;
        }
        else if (states.invalid)
        {
          decorator = "button-invalid";
          textColor = undefined;
        }
        else if (states.hovered)
        {
          decorator = "button-hovered";
          textColor = "text-hovered";
        }
        else if (states.preselected && states.focused && !states.inner)
        {
          decorator = "button-hovered";
          textColor = "text-hovered";
        }
        else if (states.preselected)
        {
          decorator = "button-hovered";
          textColor = "text-hovered";
        }
        else
        {
          decorator = states.disabled ? "button-disabled" : "button";
          textColor = undefined;
        }

        return {
          decorator: decorator,
          textColor: textColor
        }
      }
    },

    "button-frame/image":
    {
      style: function(states)
      {
        return {
          opacity: !states.replacement && states.disabled ? 0.5 : 1
        };
      }
    },

    "button":
    {
	  alias: "button-frame",
	  include: "button-frame",
	  
      style: function(states)
      {
        return {
          padding: states.pressed || states.checked 
                   || (states.checked && states.disabled) ? [4, 4, 0, 6] : [2, 6, 2, 4], 
          cursor: states.disabled ? "default" : "pointer",
          center: true
        };
      }
    },
    
    "button-simple":
    {
      alias: "atom",

      style: function(states)
      {
        return {
          padding: states.pressed || states.checked 
                   || (states.checked && states.disabled) ? [4, 2, 2, 4] : [3], 
          decorator: states.disabled ? "button-simple-disabled" :
					 states.pressed || states.checked ? "button-simple-checked" :
                     states.hovered ? "button-simple-hovered" : "button-simple",
          textColor: "text-button"
        };
      }
    },

    "toggle-button" : "button",

    "hover-button":
    {
      alias: "atom",
      include: "atom",

      style: function(states)
      {
        return {
          decorator: states.hovered ? "selected" : undefined,
          textColor: states.hovered ? "text-highlight" : undefined
        };
      }
    },

    "menubutton": 
    {
      include: "button",
      alias: "button",

      style: function(states)
      {
        return {
          icon: "decoration/arrows/down-invert.png",
          iconPosition: "right"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SPLITBUTTON
    ---------------------------------------------------------------------------
    */
    "splitbutton" : {},
    
    "splitbutton/button": 
    {
      alias: "atom",

      style: function(states)
      {
        return {
          padding: states.pressed || states.checked 
                   || (states.checked && states.disabled) ? [4, 2, 2, 4] : [3], 
          decorator: states.disabled ? "splitbutton-disabled" :
					 states.pressed || states.checked ? "splitbutton-checked" :
                     states.hovered ? "splitbutton-hovered" : "splitbutton",
          textColor: "text-button",
          center: true
        };
      }
    },
    
    "splitbutton/arrow":
    {
      alias: "button",
      include: "button",

      style: function(states)
      {
        return {
          icon: "decoration/arrows/down-small-invert.png",
          decorator: states.disabled ? "splitbutton-right-disabled" :
					 states.pressed || states.checked ?
                        "splitbutton-right-checked" :
                     states.hovered ? "splitbutton-right-hovered" : "splitbutton-right",
          marginLeft: 1,
          marginRight: 1
        };
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      CHECK BOX
    ---------------------------------------------------------------------------
    */

    "checkbox":
    {
      alias: "atom",

      style: function(states)
      {
        var icon = "";
        
        return {
          icon: icon,
          gap: 8,
          paddingLeft: 2,
          paddingRight: 2
        };
      }
    },

    "checkbox/icon": 
    {
      style: function(states)
      {
        var decorator = "checkbox";
        
        if (states.checked) {
          decorator += "-checked";
        } else if (states.undetermined) {
          decorator += "-undetermined";
        }
        
        if (states.disabled) {
          decorator += "-disabled";
        } else if (states.invalid) {
          decorator += "-invalid";
        } else  if (states.hovered) {
          decorator += "-hovered";
        } else if (states.focused) {
          decorator += "-focused";
        }
        
        return {
          decorator: decorator,
          cursor: states.hovered && !states.disabled ? "pointer" : "default",
          width: 15,
          height: 15
        }
      }
    },

    /*
    ---------------------------------------------------------------------------
      COLOR POPUP
    ---------------------------------------------------------------------------
    */

    "colorpopup":
    {
      alias: "popup",
      include: "popup",

      style: function(states)
      {
        return {
          padding: 5,
          backgroundColor: "background-application"
        };
      }
    },

    "colorpopup/field":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          margin: 2,
          width: 14,
          height: 14,
          backgroundColor: "background-light"
        };
      }
    },

    "colorpopup/selector-button": "button",
    "colorpopup/auto-button": "button",
    "colorpopup/preview-pane": "groupbox",

    "colorpopup/current-preview":
    {
      style: function(state)
      {
        return {
          height: 20,
          padding: 4,
          marginLeft: 4,
          decorator: "main",
          allowGrowX: true
        };
      }
    },

    "colorpopup/selected-preview":
    {
      style: function(state)
      {
        return {
          height: 20,
          padding: 4,
          marginRight: 4,
          decorator: "main",
          allowGrowX: true
        };
      }
    },

    "colorpopup/colorselector-okbutton":
    {
      alias: "button",
      include: "button",

      style: function(states)
      {
        return {
          icon: "icon/16/actions/dialog-ok.png"
        };
      }
    },

    "colorpopup/colorselector-cancelbutton":
   {
      alias: "button",
      include: "button",

      style: function(states)
      {
        return {
          icon: "icon/16/actions/dialog-cancel.png"
        };
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      COLOR SELECTOR
    ---------------------------------------------------------------------------
    */

    "colorselector": "widget",
    "colorselector/control-bar": "widget",
    "colorselector/control-pane": "widget",
    "colorselector/visual-pane": "groupbox",
    "colorselector/preset-grid": "widget",

    "colorselector/colorbucket":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          width: 16,
          height: 16
        };
      }
    },

    "colorselector/preset-field-set": "groupbox",
    
    "colorselector/input-field-set": 
    {
      include: "groupbox",
      alias: "groupbox",
      style: function() {
        return {
          paddingTop: 20
        };
      }
    },

    "colorselector/preview-field-set": 
    {
      include: "groupbox",
      
      alias: "groupbox",
      style: function() {
        return {
          paddingTop: 20
        };
      }
    },


    "colorselector/hex-field-composite": "widget",
    "colorselector/hex-field": "textfield",

    "colorselector/rgb-spinner-composite": "widget",
    "colorselector/rgb-spinner-red": "spinner",
    "colorselector/rgb-spinner-green": "spinner",
    "colorselector/rgb-spinner-blue": "spinner",

    "colorselector/hsb-spinner-composite": "widget",
    "colorselector/hsb-spinner-hue": "spinner",
    "colorselector/hsb-spinner-saturation": "spinner",
    "colorselector/hsb-spinner-brightness": "spinner",

    "colorselector/preview-content-old":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          width: 50,
          height: 10
        };
      }
    },

    "colorselector/preview-content-new":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          backgroundColor: "background-light",
          width: 50,
          height: 10
        };
      }
    },


    "colorselector/hue-saturation-field":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          margin: 5
        };
      }
    },

    "colorselector/brightness-field":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          margin: [5, 7]
        };
      }
    },

    "colorselector/hue-saturation-pane": "widget",
    
    "colorselector/hue-saturation-handle":
     {
	  include: "widget",
	  
	  style: function(states)
	  {
		return {
		  cursor: states.disabled ? "default" : "pointer"
		};
	  }
	},

    "colorselector/brightness-pane": "widget",

    "colorselector/brightness-handle": 
    {
	  include: "widget",
	  
	  style: function(states)
	  {
		return {
		  cursor: states.disabled ? "default" : "pointer"
		};
	  }
	},

    /*
    ---------------------------------------------------------------------------
      COMBOBOX
    ---------------------------------------------------------------------------
    */

    "combobox":
    {
      style: function(states)
      {
        var decorator;

        var focused = !!states.focused;
        var invalid = !!states.invalid;
        var disabled = !!states.disabled;

        if (focused && invalid && !disabled) {
          decorator = "input-focused-invalid";
        } else if (focused && !invalid && !disabled) {
          decorator = "input-focused";
        } else if (disabled) {
          decorator = "input-disabled";
        } else if (!focused && invalid) {
          decorator = "input-invalid";
        } else {
          decorator = "input";
        }

        return {
          decorator: decorator
        };
      }
    },
    
    "combobox/button":
    {
      include: "button-simple",
      alias: "button-simple",

      style: function(states)
      {
        return {
          icon: "decoration/arrows/down-invert.png",
          cursor: states.hovered && !states.disabled ? "pointer" : "default",
          padding: [0, 5],
          margin: 0
        };
      }
    },
    
    "combobox/list": {
      alias: "list"
    },
    
    "combobox/popup": "popup",
    
    "combobox/textfield":
    {
      include: "textfield",

      style: function(states)
      {
        return {
          decorator: undefined
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    "atom": {},
    "atom/label": "label",
    "atom/icon": "image",

    "dragdrop-cursor":
    {
      style: function(states)
      {
        var icon = "nodrop";

        if (states.copy) {
          icon = "copy";
        } else if (states.move) {
          icon = "move";
        } else if (states.alias) {
          icon = "alias";
        }

        return {
          source: "decoration/cursors/" + icon + ".gif",
          position: "right-top",
          offset: [ 2, 16, 2, 6 ]
        };
      }
    },

    "image":
    {
      style: function(states)
      {
        return {
          opacity: !states.replacement && states.disabled ? 0.3 : 1
        };
      }
    },
    
    "label":
    {
      style: function(states)
      {
        return {
          textColor: states.disabled ? "text-label-disabled" : undefined
        };
      }
    },
    
    "move-frame":
    {
      style: function(states)
      {
        return {
          decorator: "main"
        };
      }
    },

    "popup":
    {
      style: function(states)
      {
        return {
          decorator: "menu",
          textColor: "text-label"
        };
      }
    },

    "resize-frame": "move-frame",

    "root":
    {
      style: function(states)
      {
        return {
          decorator: "app-background",
          textColor: "text-label",
          font: "default"
        };
      }
    },

    "widget": {},

    /*
    ---------------------------------------------------------------------------
      DATE CHOOSER
    ---------------------------------------------------------------------------
    */

    "datechooser":
    {
      style: function(states)
      {
        var decorator;

        var focused = !!states.focused;
        var invalid = !!states.invalid;
        var disabled = !!states.disabled;

        if (focused && invalid && !disabled) {
          decorator = "input-focused-invalid";
        } else if (focused && !invalid && !disabled) {
          decorator = "input-focused";
        } else if (disabled) {
          decorator = "input-disabled";
        } else if (!focused && invalid && !disabled) {
          decorator = "border-invalid";
        } else {
          decorator = "group";
        }

        return {
          padding: 2,
          decorator: decorator,
          backgroundColor: "background-datechooser",
          width: 220
        };
      }
    },
    
    "datechooser/navigation-bar": 
    {
      style: function(states)
      {
        return {
          decorator: "toolbar-light",
          textColor: states.disabled ? "text-disabled" : states.invalid ? "text-invalid" : undefined,
          padding: 2
        };
      }
    },
    
    "datechooser/last-year-button-tooltip": "tooltip",
    "datechooser/last-month-button-tooltip": "tooltip",
    "datechooser/next-year-button-tooltip": "tooltip",
    "datechooser/next-month-button-tooltip": "tooltip",

    "datechooser/last-year-button": "datechooser/button",
    "datechooser/last-month-button": "datechooser/button",
    "datechooser/next-year-button": "datechooser/button",
    "datechooser/next-month-button": "datechooser/button",
    "datechooser/button/icon": {},
    
    "datechooser/button":
    {
      include: "button-simple",
      alias: "button-simple",

      style: function(states)
      {
        var result = {
          padding: [ 2, 4 ],
          show: "icon",
          cursor: "pointer"
        };

        if (states.lastYear) {
          result.icon = "decoration/arrows/rewind-invert.png";
          result.marginRight = 1;
        } else if (states.lastMonth) {
          result.icon = "decoration/arrows/left-invert.png";
        } else if (states.nextYear) {
          result.icon = "decoration/arrows/forward-invert.png";
          result.marginLeft = 1;
        } else if (states.nextMonth) {
          result.icon = "decoration/arrows/right-invert.png";
        }

        return result;
      }
    },
    
    "datechooser/month-year-label":
    {
      style: function(states)
      {
        return {
          font: "bold",
          textAlign: "center",
          textColor: "text-label"
        };
      }
    },
    
    "datechooser/date-pane":
    {
      style: function(states)
      {
        return {
          textColor: states.disabled ? "text-disabled" : undefined,
          marginTop: 2
        };
      }
    },
    
    "datechooser/day":
    {
      style: function(states)
      {
        return {
          textAlign: "center",
          decorator: states.disabled ? undefined : states.selected ? "selected" : undefined,
          textColor: states.disabled ? "text-disabled" : states.selected ? "text-label" : states.otherMonth ? "text-inactive" : undefined,
          font: states.today ? "bold" : undefined,
          padding: [ 2, 5 ]
        };
      }
    },
    
    "datechooser/week":
    {
      style: function(states)
      {
        return {
          textAlign: "center",
          padding: [ 2, 5 ],
          backgroundColor: "background-light"
        };
      }
    },
    
    "datechooser/weekday":
    {
      style: function(states)
      {
        return {
          textColor: states.disabled ? "text-disabled" : states.weekend ? "text-inactive" : undefined,
          textAlign: "center",
          paddingTop : 2,
          backgroundColor: "background-light"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      DATE FIELD
    ---------------------------------------------------------------------------
    */

    "datefield": "combobox",

    "datefield/button":
    {
      alias: "combobox/button",
      include: "combobox/button",

      style: function(states)
      {
        return {
          icon: "darktheme/icon/16/office-calendar.png",
          padding: [0, 3],
          decorator: undefined
        };
      }
    },

    "datefield/textfield": "combobox/textfield",

    "datefield/list":
    {
      alias: "datechooser",
      include: "datechooser",

      style: function(states)
      {
        return {
          decorator: undefined
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      FORM RENDERER
    ---------------------------------------------------------------------------
    */

    "form-renderer-label": 
    {
      include: "label",
      
      style: function() 
      {
        return {
          paddingTop: 4
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      GROUP BOX
    ---------------------------------------------------------------------------
    */

    "groupbox":
    {
      style: function(states)
      {
        return {
          legendPosition : "top"
        };
      }
    },

	"groupbox/frame":
    {
      style: function(states)
      {
        return {
          padding: 6,
          decorator: "group"
        };
      }
    },
    
    "groupbox/legend":
    {
      alias: "atom",

      style: function(states)
      {
        return {
          padding: [1, 0, 3, 4],
          textColor: states.invalid ? "text-invalid" : "text-title",
          font: "bold"
        };
      }
    },
    
    "check-groupbox": "groupbox",

    "check-groupbox/legend":
    {
      alias: "checkbox",
      include: "checkbox",

      style: function(states)
      {
        return {
          padding: [1, 0, 1, 4],
          textColor: states.invalid ? "text-invalid" : "text-title",
          font: "bold"
        };
      }
    },

    "radio-groupbox": "groupbox",

    "radio-groupbox/legend":
    {
      alias: "radiobutton",
      include: "radiobutton",

      style: function(states)
      {
        return {
          padding: [1, 0, 1, 4],
          textColor: "text-title",
          font: "bold"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      HTMLAREA
    ---------------------------------------------------------------------------
    */

    "htmlarea":
    {
      include: "widget",

      style: function(states)
      {
        return {
          backgroundColor: "background-htmlarea",
          opacity: 0.5
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      IFRAME
    ---------------------------------------------------------------------------
    */

    "iframe":
    {
      style: function(states)
      {
        return {
          decorator: "iframe"
        };
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      LIST
    ---------------------------------------------------------------------------
    */

    "list":
    {
      alias: "scrollarea",

      style: function(states)
      {
        var decorator;

        var focused = !!states.focused;
        var invalid = !!states.invalid;
        var disabled = !!states.disabled;

        if (focused && invalid && !disabled) {
          decorator = "input-focused-invalid";
        } else if (focused && !invalid && !disabled) {
          decorator = "input-focused";
        } else if (disabled) {
          decorator = "input-disabled";
        } else if (!focused && invalid && !disabled) {
          decorator = "input-invalid";
        } else {
          decorator = "input";
        }

        return {
          decorator: decorator,
          textColor: "text-active"
        };
      }
    },
    
    "list/pane": "widget",
    
    "listitem":
    {
      style: function(states)
      {
        var decorator;
        if (states.dragover) {
          decorator = states.selected ? "selected-dragover" : "dragover";
        } else {
          decorator = states.selected ? "menu-button-selected" : undefined;
        }

        return {
          padding: states.dragover ? [5, 5, 3, 5] : 3,
          textColor: states.selected ? "text-selected" : undefined,
          decorator: decorator
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */

   "menu":
    {
      style: function(states)
      {
        var result =
        {
          decorator: "menu",
          spacingX: 6,
          spacingY: 1,
          iconColumnWidth: 16,
          arrowColumnWidth: 4,
          placementModeY: states.submenu || states.contextmenu ? "best-fit" : "keep-align"
        };

        if (states.submenu)
        {
          result.position = "right-top";
          result.offset = [-2, -3];
        }

        return result;
      }
    },

    "menu/slidebar": "menu-slidebar",

    "menu-slidebar": "widget",

    "menu-slidebar-button":
    {
      style: function(states)
      {
        return {
          decorator: states.hovered  ? "selected" : undefined,
          padding: 7,
          center: true
        };
      }
    },

    "menu-slidebar/button-backward":
    {
      include: "menu-slidebar-button",

      style: function(states)
      {
        return {
          icon: "decoration/arrows/up-invert.png"
        };
      }
    },

    "menu-slidebar/button-forward":
    {
      include: "menu-slidebar-button",

      style: function(states)
      {
        return {
          icon: "decoration/arrows/down-invert.png"
        };
      }
    },

    "menu-separator":
    {
      style: function(states)
      {
        return {
          height: 0,
          decorator: "menu-separator",
          margin: [ 4, 2 ]
        };
      }
    },

    "menu-button":
    {
      alias: "atom",

      style: function(states)
      {
        return {
          textColor: "text-button",
          decorator: states.selected ? "menu-button-selected" : undefined,
          padding: [ 3, 5 ]
        };
      }
    },
    
    "menu-button/icon" :
    {
      include: "image",

      style: function(states)
      {
        return {
          alignY: "middle"
        };
      }
    },

    "menu-button/label" :
    {
      include: "label",

      style: function(states)
      {
        return {
          alignY: "middle",
          padding: 1
        };
      }
    },

    "menu-button/shortcut" :
    {
      include: "label",

      style: function(states)
      {
        return {
          alignY: "middle",
          marginLeft: 14,
          padding: 1
        };
      }
    },
    
    "menu-button/arrow" :
    {
      include: "image",

      style: function(states)
      {
        return {
          source: "decoration/arrows/right-invert.png",
          alignY: "middle",
          paddingLeft: 5
        };
      }
    },
    
    "menu-checkbox":
    {
      alias: "menu-button",
      include: "menu-button",

      style: function(states)
      {
        return {
          icon: states.checked ? "decoration/menu/checkbox-invert.gif" : undefined
        }
      }
    },
    
    "menu-radiobutton" :
    {
      alias: "menu-button",
      include: "menu-button",

      style: function(states)
      {
        return {
          icon: states.checked ? "decoration/menu/radiobutton-invert.gif" : undefined
        }
      }
    },

    /*
    ---------------------------------------------------------------------------
      MENU BAR
    ---------------------------------------------------------------------------
    */

    "menubar":
    {
      style: function(states)
      {
        return {
          decorator: "menubar"
        };
      }
    },

    "menubar-button":
    {
      alias: "atom",

      style: function(states)
      {
        var decorator = (states.pressed || states.hovered) && !states.disabled ? "menubar-selected" : undefined;

        return {
          decorator: decorator,
          textColor: states.pressed || states.hovered ? "text-selected" : undefined,
          padding: [ 3, 8 ]
        };
      }
    },


    /*
    ---------------------------------------------------------------------------
      PROGRESSIVE
    ---------------------------------------------------------------------------
    */

    "progressive-table-header":
    {
      alias: "widget",

      style: function(states)
      {
        return {
          decorator: "progressive-table-header"
        };
      }
    },

    "progressive-table-header-cell":
    {
      alias: "atom",
      style: function(states)
      {
        return {
          minWidth: 40,
          minHeight: 25,
          paddingLeft: 6,
          decorator: "progressive-table-header-cell"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */
    
    "progressbar":
    {
      style: function(states)
      {
        return {
          decorator: "progressbar",
          width: 200,
          height: 16
        };
      }
    },

    "progressbar/progress":
    {
      style: function(states)
      {
        return {
          decorator: states.disabled ? "progressbar-progress-disabled" : "progressbar-progress"
        };
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      RADIO BUTTON
    ---------------------------------------------------------------------------
    */

    "radiobutton":
    {
      alias: "atom",

      style: function(states)
      {
        return {
          icon: "",
          gap: 8,
          padding: 2,
          cursor: states.hovered && !states.disabled ? "pointer" : "default"
        };
      }
    },

    "radiobutton/icon": 
    {
      style: function(states)
      {
        var cursor = "default";
        var decorator = "radiobutton";

        if (states.checked) {
          decorator += "-checked";
        }
        
        if (states.disabled) {
          decorator += "-disabled";
        } else if (states.invalid) {
          decorator += "-invalid";
        } else  if (states.hovered && !states.checked) {
          decorator += "-hovered";
          cursor = "pointer";
        } else if (states.focused) {
          decorator += "-focused";
        }

        return {
          decorator: decorator,
          cursor: cursor,
          width: 15,
          height: 15
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      RESIZER
    ---------------------------------------------------------------------------
    */

    "resizer":
    {
      style: function(states)
      {
        return {
          decorator: "pane"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SCROLL AREA
    ---------------------------------------------------------------------------
    */

    "scrollarea":
    {
      style: function(states)
      {
        return {
          // since the scroll container disregards the min size of the scrollbars
          // we have to set the min size of the scroll area to ensure that the
          // scrollbars always have a usable size.
          minWidth: 50,
          minHeight: 50
        };
      }
    },

    "scrollarea/corner":
    {
      style: function(states)
      {
        return {
          backgroundColor: "background-application"
        };
      }
    },

    "scrollarea/pane": "widget",
    "scrollarea/scrollbar-x": "scrollbar",
    "scrollarea/scrollbar-y": "scrollbar",

    /*
    ---------------------------------------------------------------------------
      SCROLL BAR
    ---------------------------------------------------------------------------
    */

    "scrollbar":
    {
      style: function(states)
      {
        if (states["native"]) {
          return {};
        }

        return {
          width: states.horizontal ? undefined : 12,
          height: states.horizontal ? 12 : undefined,
          decorator: states.horizontal ? "scrollbar-horizontal" : "scrollbar-vertical",
          padding: 0
        };
      }
    },

    "scrollbar/slider":
    {
      alias: "slider",

      style: function(states)
      {
        return {
          padding: states.horizontal ? [0, 1, 0, 1] : [1, 0, 1, 0]
        };
      }
    },
    
	  "scrollbar/slider/knob":
    {
      include: "button-frame",

      style: function(states)
      {
        var decorator;
        var margin;
        
		    if (states.horizontal) {
          if (states.hovered) {
		        decorator = "scrollbar-slider-horizontal-hovered";
		      } else {
		        decorator = "scrollbar-slider-horizontal";
		      }
		    } else {
		      if (states.hovered) {
            decorator = "scrollbar-slider-vertical-hovered";
		      } else {
		        decorator = "scrollbar-slider-vertical";
		      }
		    }
        return {
          decorator: decorator,
          margin: states.vertical ? [1, 0] : [0, 1],
          minHeight: states.horizontal ? undefined : 12,
          minWidth: states.horizontal ? 12 : undefined,
          cursor: states.disabled ? "default" : "pointer"
        };
      }
    },
	
	  "scrollbar/button":
    {
      style: function(states)
      {
        var icon = "decoration/scrollbar/";
		    var decorator;
        
        if (states.left) {
          icon += "left";
		      decorator = "scrollbar-button-horizontal-left";
        } else if (states.right) {
          icon += "right";
		      decorator = "scrollbar-button-horizontal-right";
        } else if (states.up) {
          icon += "up";
		      decorator = "scrollbar-button-vertical-up";
        } else {
          icon += "down";
          decorator = "scrollbar-button-vertical-down";
        }
		    icon += "-invert.png";
		
		    if (states.hovered) {
		      decorator += "-hovered";
		    }

        if (states.left || states.right) {
          return {
		        decorator: decorator,
            padding: states.left ? [0, 0, 1, 4] : [0, 0, 1, 10],
            margin: states.left ? [0, -8, 0, 0] : [0, 0, 0, -7],
            icon: icon,
            minWidth: 20,
            cursor: states.disabled ? "default" : "pointer"
          }
        } else {
          return {
		        decorator: decorator,
            padding: states.up ? [0, 0, 7, 3] : [7, 0, 0, 3],
            margin: states.up ? [0, 0, -7 , 0] : [-7, 0, 0, 0],
            icon: icon,
            minHeight: 20,
            cursor: states.disabled ? "default" : "pointer"
          }
        }
      }
    },
    
    "scrollbar/button-begin": "scrollbar/button",
    "scrollbar/button-end": "scrollbar/button",

    /*
    ---------------------------------------------------------------------------
      SELECTBOX
    ---------------------------------------------------------------------------
    */

    "selectbox" :
    {
      alias: "button-frame",
      include: "button-frame",

      style: function(states)
      {
        return {
          padding: [ 2, 8 ],
          cursor: states.hovered && !states.disabled ? "pointer" : "default"
        };
      }
    },

    "selectbox/atom" : "atom",
    "selectbox/popup" : "popup",

    "selectbox/list" : {
      alias: "list"
    },
    
    "selectbox/arrow" :
    {
      include: "image",

      style: function(states)
      {
        return {
          source: "decoration/arrows/down-small-invert.png",
          paddingLeft: 5
        };
      }
    },


    /*
    ---------------------------------------------------------------------------
      SLIDER
    ---------------------------------------------------------------------------
    */

    "slider":
    {
      style: function(states)
      {
        return {
          decorator: states.horizontal ? "slider-horizontal" : "slider-vertical"
        };
      }
    },

    "slider/knob":
    {
      style: function(states)
      {
        return {
          decorator: states.disabled ? "slider-knob-disabled" :
                     states.pressed ?  "slider-knob-pressed" :
                     states.hovered ?  "slider-knob-hovered" :
                                       "slider-knob",
          maxHeight: 16,
          maxWidth: 16,
          cursor: states.disabled ? "default" : "pointer"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SLIDE BAR
    ---------------------------------------------------------------------------
    */

    "slidebar" : {},
    "slidebar/scrollpane" : {},
    "slidebar/content" : {},

    "slidebar/button-forward" :
    {
      alias: "button-simple",
      include: "button-simple",

      style: function(states)
      {
        return {
          padding: 5,
          center : true,
          icon: states.vertical ?
            "decoration/arrows/down-invert.png" :
            "decoration/arrows/right-invert.png"
        };
      }
    },

    "slidebar/button-backward" :
    {
      alias: "button-simple",
      include: "button-simple",

      style: function(states)
      {
        return {
          padding: 5,
          center : true,
          icon: states.vertical ?
            "decoration/arrows/up-invert.png" :
            "decoration/arrows/left-invert.png"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SPINNER
    ---------------------------------------------------------------------------
    */

    "spinner":
    {
      style: function(states)
      {
        var decorator;

        var focused = !!states.focused;
        var invalid = !!states.invalid;
        var disabled = !!states.disabled;

        if (focused && invalid && !disabled) {
          decorator = "input-focused-invalid";
        } else if (focused && !invalid && !disabled) {
          decorator = "input-focused";
        } else if (disabled) {
          decorator = "input-disabled";
        } else if (!focused && invalid) {
          decorator = "input-invalid";
        } else {
          decorator = "input";
        }

        return {
          decorator: decorator
        };
      }
    },

    "spinner/textfield":
    {
      style: function(states)
      {
        return {
          marginRight: 2,
          padding: [1, 4, 1],
          textColor: states.disabled ? "text-disabled" : "text-active"
        };
      }
    },

    "spinner/upbutton":
    {
      alias: "button-simple",
      include: "button-simple",

      style: function(states)
      {
        var icon = "decoration/arrows/up-small-invert.png";
        
        return {
          icon: icon,
          padding: [1, 4],
          width: 13,
          margin: 0,
          cursor: states.hovered && !states.disabled ? "pointer" : "default"
        };
      }
    },

    "spinner/downbutton":
    {
      alias: "button-simple",
      include: "button-simple",

      style: function(states)
      {
        var icon = "decoration/arrows/down-small-invert.png";
        
        return {
          icon: icon,
          padding: [1, 4],
          width: 13,
          margin: 0,
          cursor: states.hovered && !states.disabled ? "pointer" : "default"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SPLITPANE
    ---------------------------------------------------------------------------
    */

    "splitpane" :
    {
      style: function(states)
      {
        return {
          decorator: "splitpane"
        };
      }
    },

    "splitpane/splitter" :
    {
      style: function(states)
      {
        return {
          width : states.horizontal ? 3 : undefined,
          height : states.vertical ? 3 : undefined,
          backgroundColor: "background-splitpane"
        };
      }
    },
    
	"splitpane/splitter/knob" :
    {
      style: function(states)
      {
        return {
          source: states.horizontal ? "decoration/splitpane/knob-horizontal.png" : "decoration/splitpane/knob-vertical.png"
        };
      }
    },
    
    "splitpane/slider" :
    {
      style: function(states)
      {
        return {
          width : states.horizontal ? 3 : undefined,
          height : states.vertical ? 3 : undefined,
          backgroundColor: "background-splitpane"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */

    "table":
    {
      alias: "widget",

      style: function(states)
      {
        return {
          decorator: "table"
        };
      }
    },
    
    "table-header": {},

    "table/statusbar":
    {
      style: function(states)
      {
        return {
          decorator: "table-statusbar",
          padding: [ 0, 2 ]
        };
      }
    },
	
	"table/column-button":
    {
      alias: "button-frame",

      style: function(states)
      {
        return {
          decorator: "table-header-cell",
          padding: 3,
          icon      : "decoration/table/select-column-order-invert.png"
        };
      }
    },
    
    "table-column-reset-button":
    {
      include: "menu-button",
      alias: "menu-button",

      style: function()
      {
        return {
          icon: "icon/16/actions/view-refresh.png"
        };
      }
    },

    "table-scroller": "widget",

    "table-scroller/scrollbar-x": "scrollbar",
    "table-scroller/scrollbar-y": "scrollbar",

    "table-scroller/header":
    {
      style: function(states)
      {
        return {
          decorator: "table-scroller-header"
        };
      }
    },

    "table-scroller/pane":
    {
      style: function(states)
      {
        return {
          backgroundColor: "table-pane"
        };
      }
    },

    "table-scroller/focus-indicator":
    {
      style: function(states)
      {
        return {
          decorator: "table-scroller-focus-indicator"
        };
      }
    },

    "table-scroller/resize-line":
    {
      style: function(states)
      {
        return {
          backgroundColor: "border-separator",
          width : 2
        };
      }
    },
	
	"table-header-cell":
    {
      alias: "atom",
	  
      style: function(states)
      {
        return {
          minWidth: 13,
          minHeight: 20,
          padding: states.hovered ? [ 3, 4, 3, 4 ] : [ 2, 4, 4, 4 ],
          decorator: states.hovered ? "table-header-cell-selected" : "table-header-cell",
          sortIcon: states.sorted ?
              (states.sortedAscending ? "decoration/arrows/down-invert.png" : "decoration/arrows/up-invert.png")
              : undefined
        }
      }
    },
    
    "table-header-cell/label":
    {
      style: function(states)
      {
        return {
          minWidth: 0,
          alignY: "middle",
          paddingRight: 5
        };
      }
    },

    "table-header-cell/sort-icon":
    {
      style: function(states)
      {
        return {
          alignY: "middle",
          alignX : "right"
        };
      }
    },

    "table-header-cell/icon":
    {
      style: function(states)
      {
        return {
          minWidth: 0,
          alignY: "middle",
          paddingRight: 5
        };
      }
    },

    "table-editor-textfield":
    {
      include: "textfield",

      style: function(states)
      {
        return {
          decorator: undefined,
          padding: [ 2, 2 ],
          backgroundColor: "background-light"
        };
      }
    },

    "table-editor-selectbox":
    {
      include: "selectbox",
      alias: "selectbox",

      style: function(states)
      {
        return {
          padding: [ 0, 2 ],
          backgroundColor: "background-light"
        };
      }
    },

    "table-editor-combobox":
    {
      include: "combobox",
      alias: "combobox",

      style: function(states)
      {
        return {
          decorator: undefined,
          backgroundColor: "background-light"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TAB VIEW
    ---------------------------------------------------------------------------
    */

    "tabview":
    {
      style: function(states)
      {
        return {
          contentPadding: 5
        }
      }
    },

    "tabview/bar":
    {
      alias: "slidebar",

      style: function(states)
      {
        var result =
        {
          marginBottom: states.barTop ? -1 : 0,
          marginTop: states.barBottom ? -4 : 0,
          marginLeft: states.barRight ? -3 : 0,
          marginRight: states.barLeft ? -1 : 0,
          paddingTop : 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0
        }

        if (states.barTop || states.barBottom)
        {
          result.paddingLeft = 5;
          result.paddingRight = 7;
        }
        else
        {
          result.paddingTop = 5;
          result.paddingBottom = 7;
        }

        return result;
      }
    },

    "tabview/bar/button-forward":
    {
      include: "slidebar/button-forward",
      alias: "slidebar/button-forward",

      style: function(states)
      {
        if (states.barTop)
        {
          return {
            marginTop: 4
          }
        }
		else if (states.barBottom)
        {
		  return {
            marginBottom: 4
          }
        }
		else if (states.barLeft)
        {
		  return {
            marginLeft: 4,
			marginTop: 2
          }
        }
        else
        {
          return {
            marginRight: 4,
			marginTop: 2
          }
        }
      }
    },

    "tabview/bar/button-backward":
    {
      include: "slidebar/button-backward",
      alias: "slidebar/button-backward",

      style: function(states)
      {
        if (states.barTop)
        {
          return {
            marginTop: 4
          }
        }
		else if (states.barBottom)
        {
		  return {
            marginBottom: 4
          }
        }
		else if (states.barLeft)
        {
		  return {
            marginLeft: 4,
			marginBottom: 2
          }
        }
        else
        {
          return {
            marginRight: 4,
			marginBottom: 2
          }
        }
      }
    },

    "tabview/bar/scrollpane": {},

    "tabview/pane":
    {
      style: function(states)
      {
        return {
		  decorator: "group",
          minHeight: 100,
          marginBottom: states.barBottom ? -1 : 0,
          marginTop: states.barTop ? -1 : 0,
          marginLeft: states.barLeft ? -1 : 0,
          marginRight: states.barRight ? -1 : 0
        };
      }
    },

    "tabview-page": "widget",
    
    "tabview-page/button":
    {
      alias: "atom",

      style: function(states)
      {
        var decorator, padding = 0;
        var marginTop = 0, marginBottom = 0, marginLeft = 0, marginRight = 0;

        if (states.checked)
        {
		  padding = [ 4, 12 ];
          if (states.barTop)
          {
		    decorator = "tabview-button-top-checked";
            marginLeft = states.firstTab ? 0 : -4;
            marginRight = states.lastTab ? 0 : -4;
          }
          else if (states.barBottom)
          {
		    decorator = "tabview-button-bottom-checked";
            marginLeft = states.firstTab ? 0 : -4;
            marginRight = states.lastTab ? 0 : -4;
          }
          else if (states.barRight)
          {
		    decorator = "tabview-button-right-checked";
          }
          else
          {
		    decorator = "tabview-button-left-checked";
          }
        }
		else
        {
          if (states.barTop)
          {
		    if (states.hovered)
			{
		      decorator = "tabview-button-top-hovered";
			}
            else if (states.disabled)
			{
			  decorator = "tabview-button-top-disabled";
			}			
			else 
			{
		      decorator = "tabview-button-top";
			}
		    padding = [ 2, 8 ];
            marginTop = 4;
            marginLeft = states.firstTab ? 4 : 0;
          }
          else if (states.barBottom)
          {
		    if (states.hovered)
			{
		      decorator = "tabview-button-bottom-hovered";
			}
            else if (states.disabled)
			{
			  decorator = "tabview-button-bottom-disabled";
			}			
			else 
			{
		      decorator = "tabview-button-bottom";
			}
		    padding = [ 2, 8 ];
            marginBottom = 4;
            marginLeft = states.firstTab ? 4 : 0;
          }
          else if (states.barRight)
          {
		    if (states.hovered)
			{
		      decorator = "tabview-button-right-hovered";
			}
			else if (states.disabled)
			{
			  decorator = "tabview-button-right-disabled";
			}
			else 
			{
		      decorator = "tabview-button-right";
			}
		    padding = [ 4, 12 ];
            marginRight = 5;
          }
          else
          {
		    if (states.hovered)
			{
		      decorator = "tabview-button-left-hovered";
			}
            else if (states.disabled)
			{
			  decorator = "tabview-button-left-disabled";
			}
			else 
			{
		      decorator = "tabview-button-left";
			}
		    padding = [ 4, 12 ];
            marginLeft = 5;
          }
        }
		
        return {
          zIndex : states.checked ? 10 : 5,
          decorator: decorator,
          padding: padding,
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
		  textColor: states.disabled ? "text-inactive" : "text-label"
        };
      }
    },

    "tabview-page/button/label":
    {
      alias: "label",

      style: function(states)
      {
        return {
          padding: [0, 1, 0, 1],
          margin: states.focused ? 0 : 1,
          decorator: states.focused ? "keyboard-focus" : undefined
        };
      }
    },

    "tabview-page/button/close-button":
    {
      alias: "atom",
      
      style: function(states)
      {
        return {
          icon: states.hovered ? "decoration/tabview/close-button-hovered.png" : "decoration/tabview/close-button.png"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TEXT AREA
    ---------------------------------------------------------------------------
    */

    "textarea": "textfield",

    /*
    ---------------------------------------------------------------------------
      TEXT FIELD
    ---------------------------------------------------------------------------
    */

    "textfield":
    {
      style: function(states)
      {
        var decorator;

        var focused = !!states.focused;
        var invalid = !!states.invalid;
        var disabled = !!states.disabled;
        var hovered = !!states.hovered;

        if (focused && invalid && !disabled) {
          decorator = "input-focused-invalid";
        } else if (focused && !invalid && !disabled) {
          decorator = "input-focused";
        } else if (disabled) {
          decorator = "input-disabled";
        } else if (!focused && invalid && !disabled) {
          decorator = "input-invalid";
        } else {
          decorator = "input";
        }

        var textColor;
        if (states.disabled) {
          textColor = "text-disabled";
        } else if (states.showingPlaceholder) {
          textColor = "text-placeholder";
        } else {
          textColor = "text-textfield";
        }

        return {
          decorator: decorator,
          padding: [ 1, 2, 2, 2 ],
          textColor: textColor
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TOOL BAR
    ---------------------------------------------------------------------------
    */

    "toolbar":
    {
      style: function(states)
      {
        return {
          decorator: "toolbar",
          spacing: 2
        };
      }
    },
    
	"toolbar/part": "widget",
	
    "toolbar/part/container":
    {
      style: function(states)
      {
        return {
          paddingLeft: 2,
          paddingRight: 2
        };
      }
    },

	"toolbar/part/handle":
    {
      style: function(states)
      {
        return {
          source: "decoration/toolbar/toolbar-handle-knob.png",
          marginLeft: 3,
          marginRight: 3
        };
      }
    },
	
	"toolbar-button":
    {
      alias: "atom",

      style: function(states)
      {
        return {
		  padding: states.pressed || states.checked ? [6, 4, 4, 6] : [6, 6, 6, 6],
		  margin: states.pressed || states.checked ? [0] : [0],
          decorator: states.pressed || states.checked ?
                       states.disabled ? "toolbar-button-checked-disabled" : "toolbar-button-checked" :
                     states.hovered && !states.disabled ?
                       "toolbar-button-hovered" : undefined,
		  textColor: "text-button"
        };
      }
    },
	
	"toolbar-button-light":
    {
      alias: "atom",

      style: function(states)
      {
        return {
		  padding: states.pressed || states.checked ? [6, 4, 4, 6] : [6, 6, 6, 6],
		  margin: states.pressed || states.checked ? [0] : [0],
          decorator: states.pressed || states.checked ?
                        "toolbar-button-light-checked" :
                      states.hovered && !states.disabled ?
                        "toolbar-button-light-hovered" : undefined,
		  textColor: "text-button"
        };
      }
    },
	
    "toolbar-menubutton":
    {
      alias: "toolbar-button",
      include: "toolbar-button",

      style: function(states)
      {
        return {
          showArrow: true
        };
      }
    },
    
	"toolbar-menubutton/arrow":
    {
      alias: "image",
      include: "image",

      style: function(states)
      {
        return {
          source: "decoration/arrows/down-small-invert.png"
        };
      }
    },
    
    "toolbar-splitbutton":
    {
      style: function(states)
      {
        return {
          marginTop: 2,
          marginBottom: 2
        };
      }
    },
	
	"toolbar-splitbutton/button":
    {
      style: function(states)
      {
        return {
		  padding: states.pressed || states.checked ? [6, 5, 4, 6] : [6, 6, 6, 6],
		  decorator: states.pressed || (states.checked && !states.hovered) || (states.checked && states.disabled) ?
                        "toolbar-button-checked" :
                      states.hovered && !states.disabled ?
                        "toolbar-splitbutton-hovered" : undefined
        };
      }
    },
	
	"toolbar-splitbutton/arrow":
    {
      style: function(states)
      {
        return {
          icon: "decoration/arrows/down-invert.png",
		  padding: states.pressed || states.checked ? [6, 4, 4, 5] :
		           states.hovered && !states.disabled ? [6, 5, 6, 5] : [6, 5, 6, 7],
		  decorator: states.pressed || (states.checked && !states.hovered) || (states.checked && states.disabled) ?
                        "toolbar-button-checked" :
                      states.hovered && !states.disabled ?
                        "toolbar-splitbutton-arrow-hovered" : undefined
        };
      }
    },
	
	"toolbar-splitbutton-light/button" :
    {
      style: function(states)
      {
        return {
		  padding: states.pressed || states.checked ? [6, 5, 4, 6] : [6, 6, 6, 6],
		  decorator: states.pressed || (states.checked && !states.hovered) || (states.checked && states.disabled) ?
                        "toolbar-button-light-checked" :
                      states.hovered && !states.disabled ?
                        "toolbar-splitbutton-light-hovered" : undefined
        };
      }
    },
	
	"toolbar-splitbutton-light/arrow" :
    {
      style: function(states)
      {
        return {
          icon: "decoration/arrows/down-invert.png",
		  padding: states.pressed || states.checked ? [6, 4, 4, 5] :
		           states.hovered && !states.disabled ? [6, 5, 6, 5] : [6, 5, 6, 7],
		  decorator: states.pressed || (states.checked && !states.hovered) || (states.checked && states.disabled) ?
                        "toolbar-button-light-checked" :
                      states.hovered && !states.disabled ?
                        "toolbar-splitbutton-light-arrow-hovered" : undefined
        };
      }
    },
    
    "toolbar-separator" :
    {
      style: function(states)
      {
        return {
          decorator: "toolbar-separator",
          margin: 7
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TOOL TIP
    ---------------------------------------------------------------------------
    */

    "tooltip":
    {
      include: "popup",

      style: function(states)
      {
        return {
          padding: [ 1, 4, 2, 4 ],
          offset: [ 15, 5, 5, 5 ]
        };
      }
    },

    "tooltip/atom": "atom",

    "tooltip-error": 
    {
      style: function(states)
      {
        return {
          placeMethod: "widget",
          offset: [-3, 1, 0, 0],
          arrowPosition: states.placementLeft ? "left" : "right",
          position: "right-top",
          showTimeout: 100,
          hideTimeout: 10000,
          padding: [0, 4, 4, 0]
        };
      }
    },

    "tooltip-error/arrow": 
    {
      include: "image",

      style: function(states)
      {
        return {
          source: states.placementLeft ?
            "decoration/form/tooltip-error-arrow-right.png" : "decoration/form/tooltip-error-arrow-left.png",
          padding: [6, 0, 0, 0],
          zIndex: 10000001
        };
      }
    },

    "tooltip-error/atom":
    {
      include: "popup",

      style: function(states)
      {
        return {
          textColor: "text-selected",
          backgroundColor: undefined,
          decorator: "tooltip-error",
          font: "bold",
          padding: [3, 4, 4, 4],
          margin: [1, 0, 0, 0],
          maxWidth: 333
        };
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      TREE
    ---------------------------------------------------------------------------
    */

    "tree": "list",

    "tree-item":
    {
      style: function(states)
      {
        var decorator = states.selected ? "selected" : undefined;

        return {
          padding: [ 2, 6 ],
          textColor: states.selected ? "text-highlight" : states.disabled ? "red" : undefined,
          decorator: decorator,
          cursor: states.disabled ? "default" : "pointer"
        };
      }
    },

    "tree-item/icon":
    {
      include: "image",

      style: function(states)
      {
        return {
          paddingRight: 5
        };
      }
    },

    "tree-item/label": 
    {
	    include: "label",
	  
	    style: function(states)
      {
        return {
          textColor: states.disabled ? "text-disabled" : undefined
        };
      }
    },

    "tree-item/open":
    {
      include: "image",

      style: function(states)
      {
        var icon;
        
        if (states.selected && states.opened) {
          icon = "decoration/tree/open-selected.png";
        } else if (states.selected && !states.opened) {
          icon = "decoration/tree/closed-selected.png";
        } else if (states.opened) {
          icon = "decoration/tree/open.png";
        } else {
          icon = "decoration/tree/closed.png";
        }

        return {
          padding: [0, 5, 0, 2],
          source: icon
        };
      }
    },

    "tree-folder":
    {
      include: "tree-item",
      alias: "tree-item",

      style: function(states)
      {
        var icon, iconOpened;
        
        if (states.small) {
          icon = states.opened ? "icon/16/places/folder-open.png" : "icon/16/places/folder.png";
          iconOpened = "icon/16/places/folder-open.png";
        } else if (states.large) {
          icon = states.opened ? "icon/32/places/folder-open.png" : "icon/32/places/folder.png";
          iconOpened = "icon/32/places/folder-open.png";
        } else {
          icon = states.opened ? "icon/22/places/folder-open.png" : "icon/22/places/folder.png";
          iconOpened = "icon/22/places/folder-open.png";
        }

        return {
          icon: icon,
          iconOpened: iconOpened
        };
      }
    },

    "tree-file":
    {
      include: "tree-item",
      alias: "tree-item",

      style: function(states)
      {
        return {
          icon:
            states.small ? "icon/16/mimetypes/office-document.png" :
            states.large ? "icon/32/mimetypes/office-document.png" :
            "icon/22/mimetypes/office-document.png"
        };
      }
    },


    /*
    ---------------------------------------------------------------------------
      TREE VIRTUAL
    ---------------------------------------------------------------------------
    */

    "treevirtual": "table",

    "treevirtual-folder":
    {
      style: function(states)
      {
        return {
          icon: states.opened ?
            "icon/16/places/folder-open.png" : 
            "icon/16/places/folder.png"
        };
      }
    },

    "treevirtual-file":
    {
      include: "treevirtual-folder",
      alias: "treevirtual-folder",

      style: function(states)
      {
        return {
          icon: "icon/16/mimetypes/office-document.png"
        };
      }
    },

    "treevirtual-line":
    {
      style: function(states)
      {
        return {
          icon: "qx/static/blank.gif"
        };
      }
    },

    "treevirtual-contract":
    {
      style: function(states)
      {
        return {
          icon: "decoration/tree/open.png",
          paddingLeft: 5,
          paddingTop: 2
        };
      }
    },

    "treevirtual-expand":
    {
      style: function(states)
      {
        return {
          icon: "decoration/tree/closed.png",
          paddingLeft: 5,
          paddingTop: 2
        };
      }
    },

    "treevirtual-only-contract": "treevirtual-contract",
    "treevirtual-only-expand": "treevirtual-expand",
    "treevirtual-start-contract": "treevirtual-contract",
    "treevirtual-start-expand": "treevirtual-expand",
    "treevirtual-end-contract": "treevirtual-contract",
    "treevirtual-end-expand": "treevirtual-expand",
    "treevirtual-cross-contract": "treevirtual-contract",
    "treevirtual-cross-expand": "treevirtual-expand",

    "treevirtual-end":
    {
      style: function(states)
      {
        return {
          icon: "qx/static/blank.gif"
        };
      }
    },

    "treevirtual-cross":
    {
      style: function(states)
      {
        return {
          icon: "qx/static/blank.gif"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      VIRTUAL WIDGETS
    ---------------------------------------------------------------------------
    */

    "virtual-list": "list",
    "virtual-list/row-layer": "row-layer",

    "row-layer": "widget",

    "group-item":
    {
      include: "label",
      alias: "label",

      style: function(states)
      {
        return {
          padding: 4,
          decorator: "group-item",
          textColor: "groupitem-text",
          font: "bold"
        };
      }
    },

    "virtual-selectbox": "selectbox",
    "virtual-selectbox/dropdown": "popup",
    "virtual-selectbox/dropdown/list": {
      alias: "virtual-list"
    },

    "virtual-combobox": "combobox",
    "virtual-combobox/dropdown": "popup",
    "virtual-combobox/dropdown/list": {
      alias: "virtual-list"
    },

    "virtual-tree":
    {
      include: "tree",
      alias: "tree",

      style: function(states)
      {
        return {
          itemHeight: 26
        };
      }
    },

    "virtual-tree-folder": "tree-folder",
    "virtual-tree-file": "tree-file",

    "column-layer": "widget",

    "cell":
    {
      style: function(states)
      {
        return {
          textColor: states.selected ? "text-selected" : "text-label",
          padding: [3, 6],
          font: "default"
        };
      }
    },

    "cell-string": "cell",
    
    "cell-number":
    {
      include: "cell",
      style: function(states)
      {
        return {
          textAlign: "right"
        };
      }
    },
    
    "cell-image": "cell",
    
    "cell-boolean":
    {
      include: "cell",
      
      style: function(states)
      {
        return {
          iconTrue: "decoration/table/boolean-true.png",
          iconFalse: "decoration/table/boolean-false.png"
        };
      }
    },
    
    "cell-atom": "cell",
    "cell-date": "cell",
    "cell-html": "cell",

    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */

    "window":
    {
      style: function(states)
      {
        return {
          decorator: states.active ? "window-active" : "window-inactive",
          contentPadding: 5,
          margin: states.maximized ? 0 : [0, 5, 5, 0]
        };
      }
    },

    "window/pane": "widget",
    
    "window/captionbar":
    {
      style: function(states)
      {
        return {
          decorator: states.active ? "window-captionbar-active" : "window-captionbar-inactive",
          textColor: states.active ? "text-active" : "text-disabled",
          minHeight: 30,
          paddingRight: 2
        };
      }
    },
    
    "window/icon":
    {
      style: function(states)
      {
        return {
          margin: [ 5, 0, 3, 6 ]
        };
      }
    },
    
    "window/title":
    {
      style: function(states)
      {
        return {
          alignY: "top",
          textColor: "text-caption",
          font: "bold",
          paddingTop: 5,
          paddingLeft: 8
        };
      }
    },
    
    "window/close-button":
    {
      alias: "atom",

      style: function(states)
      {
        var icon;
        switch (true)
        {
          case states.pressed:
            icon = "decoration/window/close-button-pressed.png";
            break;
            
          case states.hovered:
            icon = "decoration/window/close-button-hovered.png";
            break;
            
          default:
            icon = "decoration/window/close-button.png";
        }
        return {
          icon: icon,
          cursor: states.active ? "pointer" : "default",
          margin: [ 1, 3, 3, 1 ]
        };
      }
    },
    
    "window/maximize-button":
    {
      alias: "atom",

      style: function(states)
      {
        var icon;
        switch (true)
        {
          case states.pressed:
            icon = "decoration/window/maximize-button-pressed.png";
            break;
            
          case states.hovered:
            icon = "decoration/window/maximize-button-hovered.png";
            break;
            
          default:
            icon = "decoration/window/maximize-button.png";
        }
        return {
          icon: icon,
          cursor: states.active ? "pointer" : "default",
          margin: [ 1, 3, 3, 1 ]  
        };
      }
    },
    
    "window/minimize-button":
    {
      alias: "atom",

      style: function(states)
      {
        var icon;
        switch (true)
        {
          case states.pressed:
            icon = "decoration/window/minimize-button-pressed.png";
            break;
            
          case states.hovered:
            icon = "decoration/window/minimize-button-hovered.png";
            break;
            
          default:
            icon = "decoration/window/minimize-button.png";
        }
        return {
          icon: icon,
          cursor: states.active ? "pointer" : "default",
          margin: [ 1, 3, 3, 1 ] 
        };
      }
    },
    
    "window/restore-button":
    {
      alias: "atom",

      style: function(states)
      {
        var icon;
        switch (true)
        {
          case states.pressed:
            icon = "decoration/window/restore-button-pressed.png";
            break;
            
          case states.hovered:
            icon = "decoration/window/restore-button-hovered.png";
            break;
            
          default:
            icon = "decoration/window/restore-button.png";
        }
        return {
          icon: icon,
          cursor: states.active ? "pointer" : "default",
          margin: [ 1, 3, 3, 1 ]
        };
      }
    },
    
    "window/statusbar":
    {
      style: function(states)
      {
        return {
          padding: [ 2, 6 ],
          decorator: "window-statusbar",
          minHeight: 18
        };
      }
    },
    
    "window/statusbar-text": {},
    
    "window-resize-frame":
    {
      style: function(states)
      {
        return {
          decorator: "main"
        };
      }
    }
    
  }
});
