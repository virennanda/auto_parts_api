exports.GET_ALL_PARTS=`
select
p.*,
pi2.image_path,
sc.sub_category_id,
c.category_id,
sc.sub_category_title,
c.category_title

FROM 
    
parts p left join part_with_category pwc on p.part_id =pwc .part_id 
left join sub_category sc ON pwc .sub_category_id =sc .sub_category_id 
left join category c on c.category_id =sc.category_id 
left join part_images pi2 on pi2.part_id =p.part_id 

LIMIT $1 OFFSET ($2 - 1) * $1 
`;

exports.GET_ALL_PARTS_WITH_CATEGORY=`
select
p.*,
pi2.image_path,
sc.sub_category_id,
c.category_id,
sc.sub_category_title,
c.category_title

FROM 
    
parts p left join part_with_category pwc on p.part_id =pwc .part_id 
left join sub_category sc ON pwc .sub_category_id =sc .sub_category_id 
left join category c on c.category_id =sc.category_id 
left join part_images pi2 on pi2.part_id =p.part_id 
where
    pwc.sub_category_id=$3
LIMIT $1 OFFSET ($2 - 1) * $1 
`;

exports.SEARCH_IN_PARTS=`
select
p.*,
pi2.image_path,
sc.sub_category_id,
c.category_id,
sc.sub_category_title,
c.category_title

FROM 
    
parts p left join part_with_category pwc on p.part_id =pwc .part_id 
left join sub_category sc ON pwc .sub_category_id =sc .sub_category_id 
left join category c on c.category_id =sc.category_id 
left join part_images pi2 on pi2.part_id =p.part_id 
where 
p.part_title LIKE $1 
or
c.category_title like $1
or
sc.sub_category_title like $1
or
p.part_overview like $1
 
`
