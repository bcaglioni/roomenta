import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { SedeService } from '../../services/sede.service';
// Import Models
import { Sede } from '../../domain/roomenta_db/sede';

// START - USED SERVICES
/**
* SedeService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* SedeService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Sede
 * @class SedeListComponent
 */
@Component({
    selector: 'app-sede-list',
    templateUrl: './sede-list.component.html',
    styleUrls: ['./sede-list.component.css']
})
export class SedeListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private sedeService: SedeService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.sedeService.list();
    }

    /**
     * Select Sede to remove
     *
     * @param {string} id Id of the Sede to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Sede
     */
    deleteItem() {
        this.sedeService.remove(this.idSelected);
    }

}
