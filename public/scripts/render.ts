/**
 * Created by igor on 21/11/15.
 */
interface IPainter {
    name:string,
    style:string,
    exampels:string[]
}

export class Renders {
    currentPainter:IPainter;

    constructor(public painters:IPainter[]) {

    }

    renderPainters() {
        var recipeSelect = document.getElementById('paintersList');
        this.painters.forEach((painter) => {
            var opt = document.createElement('option');
            opt.setAttribute('name', painter.name);
            opt.innerHTML = painter.name;
            recipeSelect.appendChild(opt);
        });
    }

    getCurrentPainter(name:string):any {
        this.currentPainter = this.painters.filter((painter) => painter.name === name)[0];
        return this;
    }

    renderStyle():any {
        var recipeStyle = document.getElementById('painterStyle');
        recipeStyle.innerHTML = this.currentPainter['style:'];
        return this;
    }

    renderExamples():any {
        var examplesList = document.getElementById('examplesList');
        var listHtml:string = '';
        this.currentPainter['examples: '].forEach((example)=> {
            var list:string = '<li>' + example + '</li>';
            listHtml += list;
        });
        examplesList.innerHTML = listHtml;
        return this;
    }

}