package com.thoughtclan.apiserver.controller;

import com.thoughtclan.apiserver.service.HotelService;
import com.thoughtclan.apiserver.vo.HotelVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class HotelController {
    @Autowired
    private HotelService hotelService;

    @GetMapping("/hotels")
    public ResponseEntity<List<HotelVO>> fetchHotelsList(
            @RequestParam(value = "search", required = false) String searchString
    ) {
        List<HotelVO> hotelList = hotelService.fetchHotels(searchString);
        return new ResponseEntity<List<HotelVO>>(hotelList, HttpStatus.OK);
    }
}