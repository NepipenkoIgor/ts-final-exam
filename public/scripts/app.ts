/**
 * Created by igor on 21/11/15.
 */
var renderer = null;
import loader=require('./loader')

window.onload = () => {
    var paintersSelect = document.getElementById('paintersList');
    var painteLoader = new loader.PainterLoader('/painters');
    painteLoader.load((render)=>{
        renderer=render;
    });
    paintersSelect.onchange = ()=>changePainters(paintersSelect);
};
function changePainters(painterSelect) {
    renderer.getCurrentPainter(painterSelect.value).renderStyle().renderExamples()
};