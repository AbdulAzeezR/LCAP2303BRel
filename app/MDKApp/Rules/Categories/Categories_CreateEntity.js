export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MDKApp/Services/service1.service').isDraftEnabled('Categories')) {
        return clientAPI.executeAction({
            'Name': '/MDKApp/Actions/Categories/Categories_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/MDKApp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Categories',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MDKApp/Actions/Categories/Categories_CreateEntity.action');
    }
}