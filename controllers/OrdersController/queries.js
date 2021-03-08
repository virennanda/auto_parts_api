exports.ADD_ORDER = `
INSERT INTO orders_tbl
(order_date, user_id, address_line_1, address_line_2, city, state, pincode, contact_number)
VALUES(CURRENT_TIMESTAMP, $1, $2, $3, $4, $5, $6, $7) RETURNING order_id;
`;

exports.ADD_ORDER_DETAILS = `
INSERT INTO order_details_tbl
(order_id, part_id, order_qty, order_total)
VALUES($1, $2, $3, $4) RETURNING *;
`;
exports.GET_USER_ADDRESS = `
SELECT * FROM user_address WHERE address_id=$1
`;

exports.GET_USER_ADDRESS = `
SELECT * FROM user_address WHERE address_id=$1
`;

exports.GET_ALL_ORDERS = `
select 
ot.order_id ,
ot.order_date ,
ot.address_line_1 ,
ot.address_line_2 ,
ot.city ,
ot.contact_number ,
ot.pincode ,
ot.state ,
json_agg(row_to_json((odt.part_id,p.part_number,p.part_overview,p.part_price,p.part_title,pi2.image_path))) as item
from
orders_tbl ot 
left join order_details_tbl odt on odt .order_id =ot.order_id 
left join parts p on p.part_id = odt .part_id 
left join part_images pi2 on pi2.part_id= p.part_id  
where  ot.user_id =$1
group  by ot.order_id ,ot.order_date ,ot.address_line_1 ,ot.address_line_2 ,ot.city ,ot.contact_number ,ot.pincode ,ot.state 
`;
