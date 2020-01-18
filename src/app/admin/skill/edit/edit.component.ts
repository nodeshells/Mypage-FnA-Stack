import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';
import {Subject} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';

interface SkillDoc {
  desc: string;
  experience: number;
  skillid: string;
  skillname: string;
  star: number;
  url: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class SkillEditComponent implements OnInit {
  themeSubject$: Subject<String>;
  editForm: FormGroup;
  skillid: string;
  filtedData: SkillDoc = null;

  constructor(private shared: SharedService, private builder: FormBuilder, private afs: AngularFirestore,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params => {
      const skillid = params.get('skillid');
      if (skillid !== null) {
        this.skillid = skillid;
      }
    }));
    this.themeSubject$ = this.shared.themesubject;
    const SkillDataRef = this.afs.collection('profile').doc('Skill');
    SkillDataRef.get().subscribe(data => {
      if (data.exists) {
        const skilldata = data.data().skilldata;
        const filtedData = skilldata.filter(x => x.skillid === this.skillid);
        this.filtedData = filtedData[0];
        // console.log(this.filtedData);
        this.editForm = this.builder.group({
          skillname: [this.filtedData.skillname],
          skilldesc: [this.filtedData.desc],
          skillexp: [this.filtedData.experience],
          skillstar: [this.filtedData.star],
          skillurl: [this.filtedData.url]
        });
      }
    });
    this.editForm = this.builder.group({
      skillname: [''],
      skilldesc: [''],
      skillexp: [''],
      skillstar: [''],
      skillurl: ['']
    });
  }

  ngOnInit() {
  }

  async updateSkill() {
    const updateObject = {
      desc: this.editForm.controls.skilldesc.value,
      experience: this.editForm.controls.skillexp.value,
      skillname: this.editForm.controls.skillname.value,
      star: this.editForm.controls.skillstar.value,
      url: this.editForm.controls.skillurl.value,
      skillid: this.shared.genUuid()
    };
    const SkillDocRef = this.afs.collection('profile').doc('Skill');
    SkillDocRef.get().subscribe(async data => {
      if (data.exists) {
        const skilldata = data.data().skilldata;
        const filterData = skilldata.filter(x => x.skillid !== this.skillid);
        filterData.push(updateObject);
        await SkillDocRef.set({skilldata: filterData}, {merge: true});
        this.shared.redirectToNoquery('admin/skill/preview');
      }
    });
  }
}
