public class KycRequests {
    

    public class RetrieveDocumentList{

        @auraEnabled
        public string searchTemplateName {get;set;}
        @auraEnabled
        public KycRequests.MetadataDefinition metadataDefinition {get;set;}

    }

    public class MetadataDefinition {
        @auraEnabled
        public List<String> CIFNumber {get;set;}
    }
}
