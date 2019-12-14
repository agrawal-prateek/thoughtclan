package com.thoughtclan.apiserver.dao;

import com.thoughtclan.apiserver.vo.HotelVO;

import java.util.List;

public interface HotelDAO {
	List<HotelVO> fetchHotels(String searchString);
}
