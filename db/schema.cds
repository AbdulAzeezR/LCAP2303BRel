namespace AzLCAP2303BRel;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity Categories
{
    key CategoryID : Integer;
    CategoryName : String(100);
    Description : String;
}
