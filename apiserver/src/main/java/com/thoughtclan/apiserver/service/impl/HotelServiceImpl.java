package com.thoughtclan.apiserver.service.impl;

import com.thoughtclan.apiserver.dao.HotelDAO;
import com.thoughtclan.apiserver.service.HotelService;
import com.thoughtclan.apiserver.vo.HotelVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    private HotelDAO hotelDAO;

    @Override
    public List<HotelVO> fetchHotels(String searchString) {
        return hotelDAO.fetchHotels(searchString);
    }
}