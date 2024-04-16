--
-- PostgreSQL database 
-- For intial table generation and data insertion for test

-- 
--greenfamily
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL,
	"useremail" varchar,
    "userpassword" varchar,
    "role" varchar,
    "created_at" timestamp,
	CONSTRAINT "user_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE  public.plants (
	"_id" serial NOT NULL,
	"plantname" varchar NOT NULL,
	"watering instruction" varchar,
	"fertilize_instruction " varchar,
	"sunlight" varchar,
    "image" bytea,
    "created_at" timestamp,
	CONSTRAINT "plants_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE  public.user_plant (
	"_id" serial NOT NULL,
	"user_id" bigint NOT NULL,
	"plant_id" bigint NOT NULL,
	CONSTRAINT "user_plant_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE  public.plant_instructions (
	"_id" serial NOT NULL,
	"upid" bigint NOT NULL,
    "plant_status" varchar,
    "plant_instruction" varchar,
    "plant_reminder" varchar,
    "fav_flag" boolean,
	CONSTRAINT "plant_instruction_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE  public.user_plant ADD CONSTRAINT "user_plant_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");
ALTER TABLE  public.user_plant ADD CONSTRAINT "user_plant_fk1" FOREIGN KEY ("plant_id") REFERENCES  public.plants("_id");


ALTER TABLE  public.plant_instructions ADD CONSTRAINT "plant_instructions_fk0" FOREIGN KEY ("upid") REFERENCES  public.user_plant("_id");


INSERT INTO public.users VALUES (1, 'user a', 'usera@gmail.com', 'userapassword','vip','2024-4-10');
INSERT INTO public.users VALUES (2, 'user b', 'userb@gmail.com', 'userbpassword','non-vip','2024-4-10');
INSERT INTO public.users VALUES (3, 'user c', 'userc@gmail.com', 'usercpassword','vip','2024-4-10');


INSERT INTO public.plants VALUES (1, 'Tulip', 'more water', 'unknown','more sunlight', NULL,'2024-4-10');
INSERT INTO public.plants VALUES (2, 'Rose', 'less water', 'unknown','less sunlight', NULL,'2024-4-10');

INSERT INTO public.user_plant VALUES (1,1,1);
INSERT INTO public.user_plant VALUES (2,1,2);
INSERT INTO public.user_plant VALUES (3,2,2);

INSERT INTO public.plant_instructions VALUES (1,1,'healthy',null,null,true);
INSERT INTO public.plant_instructions VALUES (2,2,'healthy','Please add more water','water every 2 days',true);
INSERT INTO public.plant_instructions VALUES (3,3,'not-healthy','Please add more water','water every day',false);

-- Completed on 2019-09-11 17:02:50 PDT

--
-- PostgreSQL database dump complete
--

-- Summary query sample:
-- select username, plantname, plant_status, plant_instruction, plant_reminder, fav_flag
-- from users a, plants b, user_plant c, plant_instructions d
-- where a._id=c.user_id
-- and b._id=c.plant_id
-- and c._id=d.upid
