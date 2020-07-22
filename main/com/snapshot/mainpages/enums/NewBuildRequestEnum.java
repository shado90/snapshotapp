package com.snapshot.mainpages.enums;

public enum NewBuildRequestEnum {

    Password("text"), Instructions("textarea"), Metrics_to_be_tested("select"), 
	Environment("select"), Player_Version("text"), Player_Release_Date("text"),
    Emails_to_be_notified("text");

    private String name;

    private NewBuildRequestEnum(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }


}
