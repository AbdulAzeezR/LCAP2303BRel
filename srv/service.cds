using { AzLCAP2303BRel as my } from '../db/schema';

using AzLCAP2303BRel from '../db/schema';

@path : 'service/AzLCAP2303BRel'
service AzLCAP2303BRelService
{
    entity Categories as
        projection on my.Categories;
}

annotate AzLCAP2303BRelService with @requires :
[
    'authenticated-user'
];
