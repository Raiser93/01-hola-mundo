import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = true;
    frase: any = {
        mensaje: 'Luchad y ser recordados como héroes o morir y ser recordados como cobardes.',
        autor: 'Aatrox'
    };

    campeones: string[] = ['Jhin', `Kai'sa`, 'Xayah'];
}
