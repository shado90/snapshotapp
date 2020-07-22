package com.snapshot.mainpages.enums;

public enum PlatformEnum {
	
	Name("text"), Content_Type("text"), Player_Name("text"),  Streaming_Protocol("text"), 
	Player_Version("text"), Conviva_Plugin("text"), Conviva_Library_Version("text"), 
	App_Version("text"), Upcoming_Player_Build_Date("date"), Player_Release_Date("date"), Ads("textarea"), Notes("textarea"), 
	Limitations("textarea"), Special_Test_Cases("textarea");

    private String name;

    private PlatformEnum(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
