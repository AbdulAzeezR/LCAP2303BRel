export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MDKApp/Services/service1.service').isDraftEnabled('Categories')) {
        return clientAPI.executeAction({
            'Name': '/MDKApp/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Categories'
                },
                'OnSuccess': '/MDKApp/Actions/Categories/NavToCategories_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MDKApp/Actions/Categories/NavToCategories_Edit.action');
    }
}