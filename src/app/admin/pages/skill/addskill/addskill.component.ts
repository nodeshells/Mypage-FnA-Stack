import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {SharedService} from '../../../../shared/shared.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
    selector: 'app-addskill',
    templateUrl: './addskill.component.html',
    styleUrls: ['./addskill.component.scss'],
})
export class AddskillComponent implements OnInit {
    themeSubject$: Subject<String>;
    addForm: FormGroup;

    constructor(private shared: SharedService, private builder: FormBuilder, private afs: AngularFirestore) {
        this.themeSubject$ = this.shared.themesubject;
        this.addForm = this.builder.group({
            skillname: [''],
            skilldesc: [''],
            skillexp: [''],
            skillstar: [''],
            skillurl: ['']
        });
    }

    ngOnInit() {
    }

    async addSkill() {
        const addObject = {
            desc: this.addForm.controls.skilldesc.value,
            experience: this.addForm.controls.skillexp.value,
            skillname: this.addForm.controls.skillname.value,
            star: this.addForm.controls.skillstar.value,
            url: this.addForm.controls.skillurl.value,
            skillid: this.shared.genUuid()
        };
        const SkillDocRef = this.afs.collection('profile').doc('Skill');
        SkillDocRef.get().subscribe(async (data: any) => {
            if (data.exists) {
                const skilldata = data.data().skilldata;
                skilldata.push(addObject);
                await SkillDocRef.set({skilldata: skilldata}, {merge: true});
                this.shared.redirectToNoquery('admin/skill/preview');
            }
        });
    }

}
