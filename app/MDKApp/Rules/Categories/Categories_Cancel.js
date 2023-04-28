export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MDKApp/Services/service1.service').isDraftEnabled('Categories')) {
        return clientAPI.executeAction({
            'Name': '/MDKApp/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Categories'
                },
                'OnSuccess': '/MDKApp/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MDKApp/Actions/CloseModalPage_Cancel.action');
    }
}