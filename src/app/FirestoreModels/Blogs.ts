import {Doc, Field} from '@1amageek/ballcap';

export class Blogs extends Doc {
  @Field title: string;
  @Field tags: string[];
  @Field blogMainMd: string;
  // 下書きなら　false　非公開
  @Field public: boolean;
}

export class PostBlogForm {
  title: string;
  tags: string[];
  mdString: string;
  public: boolean;
}

export interface PostPreviewData {
  title: string;
  mdString: string;
  tags: string[];
}
