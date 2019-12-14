package com.thoughtclan.apiserver.dao.impl;

import com.thoughtclan.apiserver.dao.HotelDAO;
import com.thoughtclan.apiserver.vo.HotelVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class HotelDAOImpl implements HotelDAO {

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public List<HotelVO> fetchHotels(String searchString) {
        String query = "select * from hotel where lower(name) like :search";
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("search", "%" + searchString.toLowerCase() + "%");
        return jdbcTemplate.query(query, namedParameters, new hotelDataExtractor());
    }

    private static final class hotelDataExtractor implements ResultSetExtractor<List<HotelVO>> {

        @Override
        public List<HotelVO> extractData(final ResultSet rs) throws SQLException {
            List<HotelVO> hotelList = new ArrayList<>();
            while (rs.next()) {
                HotelVO hotel = new HotelVO();
                hotel.setId(rs.getInt("id"));
                hotel.setName(rs.getString("name"));
                hotel.setHostName(rs.getString("host_name"));
                hotel.setNeighbourhoodGroup(rs.getString("neighbourhood_group"));
                hotel.setNeighbourhood(rs.getString("neighbourhood"));
                hotel.setLatitude(rs.getDouble("latitude"));
                hotel.setLongitude(rs.getDouble("longitude"));
                hotel.setRoomType(rs.getString("room_type"));
                hotel.setPrice(rs.getInt("price"));
                hotelList.add(hotel);
            }
            return hotelList;
        }
    }
}
