// import Entity from 'firebase-firestorm/lib/Entity';
// import {field, ITimestamp, rootCollection, timestamp} from 'firebase-firestorm/lib';
// //
// @rootCollection({
//   name: 'blogs',
// })
// export class Blog extends Entity {
//   @field({name: 'title'})
//   title!: string;
//   @field({name: 'tags'})
//   tags!: string[];
//   @field({name: 'blogMainMd'})
//   blogMainMd!: string;
//   // 下書きなら　false　非公開
//   @field({name: 'public'})
//   public!: boolean;
//   @timestamp({name: 'createdAt', updateOnCreate: true})
//   createdAt!: ITimestamp;
//   @timestamp({name: 'updatedAt', updateOnUpdate: true})
//   updatedAt!: ITimestamp;
// }
//
// export class PostBlogForm {
//   title: string;
//   tags: string[];
//   mdString: string;
//   public: boolean;
// }
//
// export interface PostPreviewData {
//   title: string;
//   mdString: string;
//   tags: string[];
// }
