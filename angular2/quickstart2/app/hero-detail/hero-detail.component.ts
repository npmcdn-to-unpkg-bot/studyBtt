/**
 * Created by Truongbt on 19-Aug-16.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Hero} from '../hero';
import {HeroService} from '../service/index';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    // phải khai báo input thì mới nhận được biến hero từ file khác gọi sang
    // @Input() hero: Hero;
    // bên app.component truyền sang biến hero thì bên này cũng phải khai báo biến là hero đẻ nhận
    // @Input('$var$') varAlias: Object;
    @Input('hero') heroAlias:Hero;
    @Output('closeBtt') closeAlias = new EventEmitter();
    error:any;
    navigated = true; // true if navigated here

    constructor(private heroService:HeroService, private route:ActivatedRoute) {
    }

    ngOnInit():void {
        this.route.params.forEach((params:Params) => {
            if (params['id'] !== undefined) {
                // Route parameters are always strings.
                // So we convert the route parameter value to a number with the JavaScript (+) operator
                let id = +params['id'];
                this.heroService.getHero(id)
                    .then(hero => this.heroAlias = hero);
            } else {
                this.navigated = false;
                this.heroAlias = new Hero();
            }
        })
    }

    save():void {
        this.heroService
            .save(this.heroAlias)
            .then(
                hero => {
                    this.heroAlias = hero; // saved hero, w/ id if new
                    this.goBack(hero);
                }
            )
            .catch(error => this.error = error); // TODO: Display error message
    }

    // Here we call emit to notify that we just added or modified a hero.
    // HeroesComponent is listening for this notification
    // and will automatically refresh the list of heroes to include our recent updates.

    // The emit "handshake" between HeroDetailComponent
    // and HeroesComponent is an example of component to component communication
    goBack(savedHero: Hero = null): void {
        console.log('goBack');
        // close.emit để đóng form khi mà add hero. Sẽ truyền bttFuck sang bên closeFormAdd của heroes.component
        this.closeAlias.emit('bttFuck');
        if (this.navigated) { window.history.back(); }
    }

}
