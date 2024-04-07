import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { DocumentGen } from 'contentlayer/core';
 

export const urlFromFilePath = (doc: DocumentGen): string => {
  return doc._raw.flattenedPath.replace(/pages\/?/, '');
};

 
export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
 
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  // documentTypes: [Blog, Note, CP],
  documentTypes: [Blog],
  mdx: {
 
  },
});
