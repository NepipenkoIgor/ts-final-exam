/**
 * Created by igor on 21/11/15.
 */
import rnd =require('./render')
export class PainterLoader {
    constructor(public url:string) {

    }

    load(callback) {
        var getPainters = new XMLHttpRequest();
        getPainters.addEventListener("load", ()=> {
            var res = JSON.parse(getPainters.response);
            if (res.error) {
                return console.log(res.error)
            }
            var renderer = new rnd.Renders(res.data.famousPainters);
            renderer.renderPainters();
            callback(renderer)
        });
        getPainters.open("GET", this.url);
        getPainters.send(null);
    }
}

