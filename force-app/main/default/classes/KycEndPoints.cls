public with sharing class KycEndPoints {
    
    private static final  string  CONFIRMACCOUNTBASE = '';
    private static final string DSXBASEURL = '';




    /**
     * @description ConfirmAccount description
     * @return   return description
     */ 
    public static map<string,string> ConfirmAccount(){
        return new Map<string,string>{
            'url' => CONFIRMACCOUNTBASE,
            'moduleId' =>'',
            'auth' =>''
        };

    }


    public static string DSXGetDocumentList(){
        return '';

    }

    
    public static string DSXGetDocumentMetadata(){
        return '';
        
    }

    public static string StoreDocument(){
        return '';
        
    }

    public static string UpdateDocument(){
        return '';
    }

}
