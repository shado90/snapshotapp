package com.snapshot.mainpages.enums;

import java.util.Arrays;
import java.util.List;

public enum MetricEnum {
	Attempts,Video_Start_Failure,Exits_Before_Video_Start,Video_Startup_Time,Plays,Concurrent_Plays,Average_Bitrate,
	Rebuffering_Ratio,CIRR,Video_Restart_Time,Video_Playback_Failure,Ended_Plays;
	
	public List<MetricEnum> getMetrics(){
		return Arrays.asList(MetricEnum.values());
	}

}
