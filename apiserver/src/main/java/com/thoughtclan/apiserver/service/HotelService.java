package com.thoughtclan.apiserver.service;

import com.thoughtclan.apiserver.vo.HotelVO;

import java.util.List;


public interface HotelService {

    List<HotelVO> fetchHotels(String searchString);
}
