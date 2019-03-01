// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { AulaService } from '../../services/aula.service';

import { Aula } from '../../domain/roomenta_db/aula';
import { Sede } from '../../domain/roomenta_db/sede';

// START - USED SERVICES
/**
* AulaService.create
*	@description CRUD ACTION create
*
* AulaService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* AulaService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Aula
 */
@Component({
    selector: 'app-aula-edit',
    templateUrl: 'aula-edit.component.html',
    styleUrls: ['aula-edit.component.css']
})
export class AulaEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Aula>;
    isNew: Boolean = true;
    formValid: Boolean;

    listContains: Aula[];

    externalSede: Sede[];

    constructor(
        private aulaService: AulaService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
        this.externalSede = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.aulaService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

                this.sedeService.findByContains(id).subscribe(list => this.externalSede = list);
            }
            // Get relations
        });
    }



    /**
     * Save Aula
     *
     * @param {boolean} formValid Form validity check
     * @param Aula item Aula to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.aulaService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.aulaService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
