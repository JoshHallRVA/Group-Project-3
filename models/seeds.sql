INSERT INTO sellers (sellers_id, address_id, products, costs) VALUES ('Jay Adams', '1100 Jackson Ct, Liberty, MO 64068', 'clothes, electronics, treadmill', 5.00, false);
INSERT INTO sellers (sellers_id, address_id, products, costs) VALUES ('Rick Deckard', '19040 E Valley View Pkwy, Independence, MO 64055', 'dvds, toys, hulahoops', 50.00, false);
INSERT INTO sellers (sellers_id, address_id, products, costs) VALUES ('Jim Sinegal', '12600 S Quivira Rd, Overland Park, KS 66213', 'pencils, clothes, books', 9500.00, true);

INSERT INTO buyers_wish_list (name_id, products) VALUES ("Jay Adams", '"clothes", "dvds","books"', true);
INSERT INTO buyers_wish_list (name_id, products) VALUES ("Rick Deckard", '"electronics", "outdoors items", "kitchen utensils"', false);
