export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MDKApp/Services/service1.service').isDraftEnabled('Categories')) {
        return clientAPI.executeAction({
            'Name': '/MDKApp/Actions/Categories/Categories_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MDKApp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Categories'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MDKApp/Actions/Categories/Categories_UpdateEntity.action');
    }
}