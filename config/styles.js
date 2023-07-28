import colors from './colors';

export default {
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        // alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    bookshelfScreen: {
        textAlign: 'center',
        marginTop: 40,
        background: 'transparent',
        padding: 20
    },
    buttons: {
        paddingTop: 15,
        paddingHorizontal: 90
    },
    bookListContainer: {
        backgroundColor: 'black',
    },
    bookItem: {
        backgroundColor: 'transparent',
    },
    listItemContent: {
        backgroundColor: '#5637DD',
        borderRadius: 10,
        padding: 10,
        shadowOpacity: 0.50,
    },
    bookItemTitle: {
        color: '#fff',
        backgroundColor: 'dodgerblue',
        padding: 8,
        borderRadius: 10,
        
    },
    bookItemSubtitle: {
        color: '#fff',
        backgroundColor: 'navy',
        padding: 8,
        borderRadius: 10,
        margin: 10
    },
    homeScreenText: {
        textAlign: 'center',
        marginTop: 40,
        backgroundColor: colors.blue,
        padding: 10,
        color: colors.darkGrey,
        fontSize: 44
    },
    logoutButton: {
        marginRight: 10,
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