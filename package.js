Package.describe({
  summary: "methoddraw"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.export('svgedit', 'client');
  api.export('svgCanvas', 'client');
  api.export('methodDraw', 'client');
  api.add_files([
    "images/align-bottom.png",
    "images/align-bottom.svg",
    "images/align-center.png",
    "images/align-center.svg",
    "images/align-left.png",
    "images/align-left.svg",
    "images/align-middle.png",
    "images/align-middle.svg",
    "images/align-right.png",
    "images/align-right.svg",
    "images/align-top.png",
    "images/align-top.svg",
    "images/AlphaBar.png",
    "images/bar-opacity.png",
    "images/Bars.png",
    "images/bold.png",
    "images/cancel.png",
    "images/circle.png",
    "images/clear.png",
    "images/clone.png",
    "images/conn.svg",
//    "images/copy.png",
    "images/cross.png",
    "images/cut.png",
    "images/delete.png",
    "images/document-properties.png",
    "images/drag.png",
    "images/dragging.png",
    "images/dropdown.gif",
    "images/ellipse.png",
    "images/ellipse.svg",
    "images/eye.png",
    "images/eye.svg",
    "images/eyedropper.png",
    "images/eyedropper_tool.png",
    "images/fhpath.png",
    "images/flyouth.png",
    "images/flyup.gif",
    "images/freehand-circle.png",
    "images/freehand-square.png",
    "images/go-down.png",
    "images/go-up.png",
    "images/image.png",
    "images/image.svg",
    "images/italic.png",
    "images/italic.svg",
    "images/line.png",
    "images/link_controls.png",
    "images/logo.png",
    "images/map-opacity.png",
    "images/mappoint.gif",
    "images/mappoint_c.png",
    "images/mappoint_f.png",
    "images/copy.png",
    "images/Maps.png",
    "images/move_bottom.png",
    "images/move_top.png",
    "images/NoColor.png",
    "images/node_clone.png",
    "images/node_delete.png",
    "images/none.png",
    "images/open.png",
    "images/paste.png",
    "images/path.png",
    "images/path.svg",
    "images/pencil.png",
    "images/pencil.svg",
    "images/pencil_cursor.png",
    "images/picker.gif",
    "images/placeholder.svg",
    "images/polygon.png",
    "images/polygon.svg",
    "images/preview-opacity.png",
    "images/rangearrows.gif",
    "images/rangearrows2.gif",
    "images/rect.png",
    "images/redo.png",
    "images/reorient.png",
    "images/rotate.png",
    "images/save.png",
    "images/select.png",
    "images/select.svg",
    "images/select_node.png",
    "images/sep.png",
    "images/shape_group.png",
    "images/shape_ungroup.png",
    "images/source.png",
    "images/spinbtn_updn_big.png",
    "images/square.png",
    "images/svg_edit_icons.svg",
    "images/svg_edit_icons.svgz",
    "images/text.png",
    "images/text.svg",
    "images/to_path.png",
    "images/undo.png",
    "images/view-refresh.png",
    "images/wave.png",
    "images/wireframe.png",
    "images/zoom.png",
    "images/zoom.svg",

    "css/method-draw.css",
    "css/fonts.css",
    
    "lib/jquery.js",
    "lib/jquery-ui/jquery-ui-1.8.17.custom.min.js",
    
    "src/browser.js",
    "src/svgtransformlist.js",
    "src/math.js",
    "src/units.js",
    "src/svgutils.js",
    "src/draw.js",
    "src/sanitize.js",
    "src/history.js",
    "src/select.js",
    "src/path.js",
    "src/dialog.js",
    "src/svgcanvas.js",
    "src/method-draw.js",
    
    "lib/touch.js",
    "lib/requestanimationframe.js",
    "lib/taphold.js",
    "lib/mousewheel.js",
    "lib/contextmenu.js",
    
    "lib/jgraduate/css/jPicker.css",
    "lib/jgraduate/css/jgraduate.css",
    "lib/jgraduate/jquery.jgraduate.js",
    "lib/jgraduate/jpicker.min.js",
    "lib/js-hotkeys/jquery.hotkeys.min.js",
    "lib/jquerybbq/jquery.bbq.min.js",
    "lib/jquery-draginput.js",
    "lib/contextmenu/jquery.contextMenu.js",
    
    "icons/jquery.svgicons.js",
    
    "extensions/ext-shapes.js"
  ], "client");
});
