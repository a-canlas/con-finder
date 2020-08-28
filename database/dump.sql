--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

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

ALTER TABLE ONLY public.users DROP CONSTRAINT users_fk0;
ALTER TABLE ONLY public.conventions DROP CONSTRAINT conventions_fk0;
ALTER TABLE ONLY public.venues DROP CONSTRAINT venues_pk;
ALTER TABLE ONLY public.users DROP CONSTRAINT "users_userName_key";
ALTER TABLE ONLY public.users DROP CONSTRAINT users_pk;
ALTER TABLE ONLY public.conventions DROP CONSTRAINT conventions_pk;
ALTER TABLE public.venues ALTER COLUMN "venueId" DROP DEFAULT;
ALTER TABLE public.users ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE public.conventions ALTER COLUMN "conventionId" DROP DEFAULT;
DROP SEQUENCE public."venues_venueId_seq";
DROP TABLE public.venues;
DROP SEQUENCE public."users_userId_seq";
DROP TABLE public.users;
DROP SEQUENCE public."conventions_conventionId_seq";
DROP TABLE public.conventions;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: conventions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.conventions (
    "conventionId" integer NOT NULL,
    name text NOT NULL,
    website text NOT NULL,
    "imagePath" text,
    "venueId" integer NOT NULL,
    "startDate" date NOT NULL,
    "endDate" date NOT NULL
);


--
-- Name: conventions_conventionId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."conventions_conventionId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: conventions_conventionId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."conventions_conventionId_seq" OWNED BY public.conventions."conventionId";


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    "userId" integer NOT NULL,
    "userName" text NOT NULL,
    password text NOT NULL,
    "conventionId" integer NOT NULL,
    "profilePicPath" text
);


--
-- Name: users_userId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."users_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."users_userId_seq" OWNED BY public.users."userId";


--
-- Name: venues; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.venues (
    "venueId" integer NOT NULL,
    "venueName" text NOT NULL,
    address text NOT NULL,
    city text NOT NULL,
    state text NOT NULL,
    country text NOT NULL,
    phone text,
    longitude double precision NOT NULL,
    latitude double precision NOT NULL
);


--
-- Name: venues_venueId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."venues_venueId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: venues_venueId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."venues_venueId_seq" OWNED BY public.venues."venueId";


--
-- Name: conventions conventionId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conventions ALTER COLUMN "conventionId" SET DEFAULT nextval('public."conventions_conventionId_seq"'::regclass);


--
-- Name: users userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN "userId" SET DEFAULT nextval('public."users_userId_seq"'::regclass);


--
-- Name: venues venueId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.venues ALTER COLUMN "venueId" SET DEFAULT nextval('public."venues_venueId_seq"'::regclass);


--
-- Data for Name: conventions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.conventions ("conventionId", name, website, "imagePath", "venueId", "startDate", "endDate") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users ("userId", "userName", password, "conventionId", "profilePicPath") FROM stdin;
\.


--
-- Data for Name: venues; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.venues ("venueId", "venueName", address, city, state, country, phone, longitude, latitude) FROM stdin;
1	San Jose Convention Center	150 W San Carlos St	San Jose	CA	United States	\N	-121.888771000000006	37.3290790000000001
2	Donald E. Stephens Convention Center	5555 N River Rd	Rosemont	IL	United States	\N	-87.8604899999999986	41.9795299999999969
3	David L. Lawrence Convention Center	1000 Fort Duquesne Blvd	Pittsburgh	PA	United States	412-565-6000	-79.9956499999999977	40.4467199999999991
\.


--
-- Name: conventions_conventionId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."conventions_conventionId_seq"', 1, false);


--
-- Name: users_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."users_userId_seq"', 1, false);


--
-- Name: venues_venueId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."venues_venueId_seq"', 3, true);


--
-- Name: conventions conventions_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conventions
    ADD CONSTRAINT conventions_pk PRIMARY KEY ("conventionId");


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY ("userId");


--
-- Name: users users_userName_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_userName_key" UNIQUE ("userName");


--
-- Name: venues venues_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.venues
    ADD CONSTRAINT venues_pk PRIMARY KEY ("venueId");


--
-- Name: conventions conventions_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conventions
    ADD CONSTRAINT conventions_fk0 FOREIGN KEY ("venueId") REFERENCES public.venues("venueId");


--
-- Name: users users_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_fk0 FOREIGN KEY ("conventionId") REFERENCES public.conventions("conventionId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

