import colors from './colors';

export default {
    bookshelfScreen: {
        textAlign: 'center',
        marginTop: 40,
        backgroundColor: colors.darkGrey,
        padding: 20
    },
    buttons: {
        paddingTop: 15,
        paddingHorizontal: 90
    },
    bookItem: {
    },
    listItemContent: {
        backgroundColor: '#fff'
    },
    bookItemTitle: {
        color: 'navy',
        backgroundColor: 'orange'
    },
    bookItemSubtitle: {
        color: '#fff',
        backgroundColor: 'red',
    },
    homeScreenText: {
        textAlign: 'center',
        marginTop: 40,
        backgroundColor: colors.blue,
        padding: 10,
        color: colors.darkGrey,
        fontSize: 44
    },
    screenContainer: {
        marginTop: 22,
    },
    settingsScreenMainText: {
        textAlign: 'center',
        marginTop: 40,
        backgroundColor: colors.green,
        padding: 20
    },
    settingsScreenSubText: {
        paddingLeft: 10
    },
    homeOptionCard: {
        padding: 30,
        margin: 40,
        borderRadius: 14,
        backgroundColor: colors.green,
        color: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        
        elevation: 19,
    },
    homeOptionCardText: {
        color: colors.lightGrey,
        textAlign: 'center',
        fontSize: 20
    }
}