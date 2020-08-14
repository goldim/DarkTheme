/* ************************************************************************

   Copyright:
      2010-2015 Norbert Schröder

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Theme.define("darktheme.theme.Font",
{
  fonts:
  {
    "default":
    {
      size: 13,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? 
        [ "Lucida Grande" ] : 
        [ "Segoe UI", "MS Sans Serif", "Arial", "sans-serif" ]
    },

    "bold":
    {
      size: 13,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? 
        [ "Lucida Grande" ] : 
        [ "Segoe UI", "MS Sans Serif", "Arial", "sans-serif" ],
      bold: true
    },

    "small":
    {
      size: 11,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? 
        [ "Lucida Grande" ] : 
        [ "Segoe UI", "MS Sans Serif", "Arial", "sans-serif" ]
    },

    "monospace":
    {
      size: 12,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? 
        [ "Lucida Console", "Monaco" ] : 
        [ "Consolas", "DejaVu Sans Mono", "Courier New", "monospace" ]
    },
    
    "headline":
    {
      size: 14,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? 
        [ "Lucida Grande" ] : 
        [ "MS Sans Serif", "Arial", "sans-serif" ],
      bold: true
    }
  }
});
