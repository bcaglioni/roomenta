import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { AulaService } from '../../services/aula.service';
// Import Models
import { Aula } from '../../domain/roomenta_db/aula';

// START - USED SERVICES
/**
* AulaService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* AulaService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Aula
 * @class AulaListComponent
 */
@Component({
    selector: 'app-aula-list',
    templateUrl: './aula-list.component.html',
    styleUrls: ['./aula-list.component.css']
})
export class AulaListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private aulaService: AulaService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.aulaService.list();
    }

    /**
     * Select Aula to remove
     *
     * @param {string} id Id of the Aula to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Aula
     */
    deleteItem() {
        this.aulaService.remove(this.idSelected);
    }

}
