import datetime
import random
from sqlalchemy.orm import Session
from app.models import Trademark, User, ApiKey, ApiUsageLog, CreditTransaction
from app.database import Base, engine, SessionLocal

SAMPLE_TRADEMARKS = [
    # Nike group (for Starts With demo in user prompt)
    {"name": "NIKE", "app_no": "1948201", "reg_no": "TM-849201", "owner": "Nike Innovate C.V.", "class": 25, "status": "Registered", "country": "India", "filing": "2008-04-12", "reg": "2010-09-18", "desc": "Footwear, athletic apparel, sports clothing and headwear."},
    {"name": "NIKE AIR", "app_no": "2491024", "reg_no": "TM-958102", "owner": "Nike Innovate C.V.", "class": 25, "status": "Registered", "country": "India", "filing": "2012-07-15", "reg": "2014-02-11", "desc": "Cushioned athletic shoes and pressurized sole technology."},
    {"name": "NIKE SPORTS", "app_no": "3810294", "reg_no": "TM-104928", "owner": "Nike Innovate C.V.", "class": 28, "status": "Registered", "country": "India", "filing": "2018-03-20", "reg": "2019-11-04", "desc": "Sporting articles, basketballs, gym gear and athletic accessories."},
    {"name": "NIKE RUN CLUB", "app_no": "4918204", "reg_no": "TM-119283", "owner": "Nike Innovate C.V.", "class": 9, "status": "Registered", "country": "India", "filing": "2020-01-10", "reg": "2021-06-25", "desc": "Mobile fitness applications, downloadable tracking software and digital health telemetry."},
    {"name": "NIKELAB", "app_no": "5201934", "reg_no": None, "owner": "Nike Innovate C.V.", "class": 35, "status": "Pending", "country": "India", "filing": "2022-05-18", "reg": None, "desc": "Retail store services featuring designer streetwear and limited edition sneakers."},

    # Tech group (for Contains demo in user prompt)
    {"name": "TECH", "app_no": "1029384", "reg_no": "TM-492810", "owner": "Tech Universal Holdings Ltd.", "class": 42, "status": "Registered", "country": "India", "filing": "2006-11-04", "reg": "2008-08-22", "desc": "Computer programming, software architecture and IT consulting services."},
    {"name": "TECHWORLD", "app_no": "2948102", "reg_no": "TM-839102", "owner": "TechWorld Media Pvt Ltd", "class": 41, "status": "Registered", "country": "India", "filing": "2014-09-12", "reg": "2016-04-18", "desc": "Educational conferences, tech publications, digital media and publishing."},
    {"name": "FINTECH", "app_no": "3910283", "reg_no": "TM-928194", "owner": "FinTech Global Payments Corp", "class": 36, "status": "Registered", "country": "India", "filing": "2017-02-14", "reg": "2018-10-30", "desc": "Financial payment processing, digital wallet architecture, and banking software APIs."},
    {"name": "TECH SOLUTIONS", "app_no": "4810293", "reg_no": None, "owner": "Apex Tech Solutions LLP", "class": 42, "status": "Objected", "country": "India", "filing": "2021-08-09", "reg": None, "desc": "Enterprise cloud migrations, custom CRM development and cybersecurity auditing."},
    {"name": "PAYTECH", "app_no": "5102938", "reg_no": "TM-129482", "owner": "PayTech Technologies Inc.", "class": 36, "status": "Registered", "country": "India", "filing": "2022-01-19", "reg": "2023-05-14", "desc": "Point-of-sale payment routing and unified checkout gateways."},
    {"name": "AGRITECH PRO", "app_no": "4192038", "reg_no": "TM-992014", "owner": "Kisan AgriTech Labs", "class": 44, "status": "Registered", "country": "India", "filing": "2019-06-11", "reg": "2020-12-08", "desc": "Agricultural drone monitoring and soil intelligence consulting."},
    {"name": "HEALTHTECH 360", "app_no": "5391024", "reg_no": None, "owner": "MedVantage HealthTech Corp", "class": 10, "status": "Pending", "country": "India", "filing": "2023-04-15", "reg": None, "desc": "Medical diagnostic sensors and wearable biometric monitoring systems."},

    # Iconic Indian Brands
    {"name": "TATA", "app_no": "100293", "reg_no": "TM-100293", "owner": "Tata Sons Private Limited", "class": 12, "status": "Registered", "country": "India", "filing": "1942-03-10", "reg": "1944-07-20", "desc": "Automobiles, commercial vehicles, chassis and electric mobility."},
    {"name": "TATA NEU", "app_no": "5129481", "reg_no": "TM-134912", "owner": "Tata Digital Private Limited", "class": 35, "status": "Registered", "country": "India", "filing": "2021-12-01", "reg": "2023-02-15", "desc": "Super-app multi-category marketplace and customer loyalty ecosystem."},
    {"name": "TATA MOTORS", "app_no": "839102", "reg_no": "TM-710294", "owner": "Tata Motors Limited", "class": 12, "status": "Registered", "country": "India", "filing": "1998-05-24", "reg": "2000-11-19", "desc": "Passenger cars, trucks, buses, defence vehicles and EV drivetrains."},
    {"name": "JIO", "app_no": "3102948", "reg_no": "TM-894102", "owner": "Reliance Industries Limited", "class": 38, "status": "Registered", "country": "India", "filing": "2015-10-18", "reg": "2017-06-20", "desc": "Telecommunications, 5G wireless broadband, fibre optic routing."},
    {"name": "JIO CINEMA", "app_no": "4819204", "reg_no": "TM-112093", "owner": "Viacom18 Media Private Limited", "class": 41, "status": "Registered", "country": "India", "filing": "2020-08-14", "reg": "2022-01-09", "desc": "Over-the-top (OTT) video streaming, live sports broadcasting and video-on-demand."},
    {"name": "ZOMATO", "app_no": "2094810", "reg_no": "TM-781920", "owner": "Zomato Limited", "class": 43, "status": "Registered", "country": "India", "filing": "2010-11-20", "reg": "2012-08-16", "desc": "Restaurant discovery services, food ordering and hyper-local delivery logistics."},
    {"name": "SWIGGY", "app_no": "2910482", "reg_no": "TM-849102", "owner": "Bundl Technologies Private Limited (Swiggy)", "class": 39, "status": "Registered", "country": "India", "filing": "2014-08-04", "reg": "2016-03-29", "desc": "Logistics, courier dispatch and on-demand delivery of prepared food and grocery items."},
    {"name": "SWIGGY INSTAMART", "app_no": "4910294", "reg_no": "TM-118293", "owner": "Bundl Technologies Private Limited (Swiggy)", "class": 35, "status": "Registered", "country": "India", "filing": "2020-09-12", "reg": "2022-04-10", "desc": "Quick commerce retail and dark-store grocery fulfillment."},
    {"name": "ZEPTO", "app_no": "5192038", "reg_no": "TM-128491", "owner": "KiranaKart Technologies Private Limited", "class": 39, "status": "Registered", "country": "India", "filing": "2021-07-28", "reg": "2023-01-14", "desc": "Instant grocery delivery services and 10-minute micro-warehouse dispatch."},
    {"name": "PAYTM", "app_no": "1940192", "reg_no": "TM-748192", "owner": "One97 Communications Limited", "class": 36, "status": "Registered", "country": "India", "filing": "2010-02-14", "reg": "2011-12-08", "desc": "Mobile recharge, UPI payments, QR payment soundbox and financial services."},
    {"name": "RAZORPAY", "app_no": "2819204", "reg_no": "TM-819203", "owner": "Razorpay Software Private Limited", "class": 36, "status": "Registered", "country": "India", "filing": "2014-05-19", "reg": "2015-11-30", "desc": "Payment gateway processing, neo-banking APIs and automated corporate payroll."},
    {"name": "CRED", "app_no": "4019283", "reg_no": "TM-982014", "owner": "Dreamplug Technologies Private Limited", "class": 36, "status": "Registered", "country": "India", "filing": "2018-11-05", "reg": "2020-03-17", "desc": "Credit card bill management, rewards platform, and peer-to-peer lending."},
    {"name": "INFOSYS", "app_no": "649102", "reg_no": "TM-549102", "owner": "Infosys Limited", "class": 42, "status": "Registered", "country": "India", "filing": "1994-09-15", "reg": "1996-05-10", "desc": "Software design, business consulting, information technology outsourcing."},
    {"name": "NYKAA", "app_no": "2491028", "reg_no": "TM-819283", "owner": "FSN E-Commerce Ventures Limited", "class": 3, "status": "Registered", "country": "India", "filing": "2012-04-20", "reg": "2014-01-19", "desc": "Cosmetics, beauty products, perfumes, skincare and wellness formulations."},
    {"name": "AMUL", "app_no": "184910", "reg_no": "TM-184910", "owner": "Gujarat Cooperative Milk Marketing Federation Ltd.", "class": 29, "status": "Registered", "country": "India", "filing": "1958-06-12", "reg": "1960-01-25", "desc": "Milk, butter, ghee, cheese, ice creams and dairy products."},

    # Global Tech & Iconic Marks
    {"name": "APPLE", "app_no": "748192", "reg_no": "TM-619284", "owner": "Apple Inc.", "class": 9, "status": "Registered", "country": "USA", "filing": "1997-01-15", "reg": "1999-08-20", "desc": "Computers, smart phones, tablets, operating systems, smart watches and wearable audio devices."},
    {"name": "APPLE INTELLIGENCE", "app_no": "6491029", "reg_no": None, "owner": "Apple Inc.", "class": 42, "status": "Pending", "country": "USA", "filing": "2024-06-10", "reg": None, "desc": "Generative artificial intelligence, on-device neural processing, and context-aware computational assistants."},
    {"name": "MICROSOFT", "app_no": "519284", "reg_no": "TM-491028", "owner": "Microsoft Corporation", "class": 9, "status": "Registered", "country": "USA", "filing": "1992-04-18", "reg": "1994-10-12", "desc": "Operating system software, productivity suites, cloud computing infrastructure and gaming consoles."},
    {"name": "AZURE", "app_no": "1829401", "reg_no": "TM-719204", "owner": "Microsoft Corporation", "class": 42, "status": "Registered", "country": "USA", "filing": "2008-10-27", "reg": "2010-06-14", "desc": "Cloud hosting, distributed computing, containerized virtual machines and serverless functions."},
    {"name": "GOOGLE", "app_no": "849201", "reg_no": "TM-691028", "owner": "Google LLC", "class": 42, "status": "Registered", "country": "USA", "filing": "1999-09-04", "reg": "2001-07-19", "desc": "Internet search engine services, advertising delivery platforms, cloud productivity tools."},
    {"name": "GEMINI", "app_no": "6102948", "reg_no": None, "owner": "Google LLC", "class": 42, "status": "Pending", "country": "USA", "filing": "2023-12-06", "reg": None, "desc": "Multimodal artificial intelligence models, natural language processing and neural synthesis engines."},
    {"name": "TESLA", "app_no": "1492018", "reg_no": "TM-682910", "owner": "Tesla, Inc.", "class": 12, "status": "Registered", "country": "USA", "filing": "2006-03-08", "reg": "2008-01-22", "desc": "Electric vehicles, powertrain components, autonomous self-driving systems and energy storage batteries."},
    {"name": "STARBUCKS", "app_no": "691028", "reg_no": "TM-581920", "owner": "Starbucks Corporation", "class": 30, "status": "Registered", "country": "USA", "filing": "1995-12-14", "reg": "1997-09-02", "desc": "Roasted whole bean coffee, ground coffee, espresso beverages and tea blends."},
    {"name": "SPOTIFY", "app_no": "1829402", "reg_no": "TM-748192", "owner": "Spotify AB", "class": 41, "status": "Registered", "country": "Sweden", "filing": "2008-09-30", "reg": "2010-10-18", "desc": "Digital audio streaming, podcast distribution, algorithmic music discovery platforms."},
    {"name": "NETFLIX", "app_no": "1192840", "reg_no": "TM-639102", "owner": "Netflix, Inc.", "class": 41, "status": "Registered", "country": "USA", "filing": "2002-05-11", "reg": "2004-03-09", "desc": "Subscription-based streaming of motion pictures, serialized television programs and interactive media."},
    {"name": "ROLEX", "app_no": "109284", "reg_no": "TM-109284", "owner": "Rolex SA", "class": 14, "status": "Registered", "country": "Switzerland", "filing": "1950-02-18", "reg": "1951-11-04", "desc": "Horological instruments, chronometers, luxury wristwatches and mechanical movements."}
]

def generate_expanded_records():
    prefixes = ["TECH", "CYBER", "BIO", "NEO", "SMART", "AERO", "QUANTUM", "NEXUS", "ZENITH", "VORTEX", "APEX", "ECHO", "PRIME", "SYNAPSE", "VELOCITY", "HYPER", "INFRA", "CLOUD", "LUMEN", "AURA"]
    suffixes = ["WORKS", "LABS", "SYSTEMS", "GLOBAL", "CORP", "SOLUTIONS", "PAY", "HEALTH", "DIGITAL", "AI", "ANALYTICS", "STUDIOS", "NETWORK", "CLOUD", "CARE", "SECURITY", "VENTURES", "LOGISTICS", "MEDIA", "FINANCE"]
    statuses = ["Registered", "Registered", "Registered", "Pending", "Pending", "Objected", "Opposed", "Abandoned"]
    countries = ["India", "India", "India", "USA", "United Kingdom", "Germany", "Singapore", "Japan", "Australia", "Canada"]
    owners_pool = [
        "Bharat Innovations Private Limited", "Apex Global Technologies Inc.", "Zenith Enterprise Solutions Ltd.",
        "Skyline Digital Systems LLP", "Pinnacle Bioscience Corp", "Quantum Leap Informatics Ltd",
        "Vanguard Industrial Holdings", "Bluechip Software Solutions Pvt Ltd", "Frontier AI Technologies",
        "Horizon Consumer Products India", "Beacon Financial Services Corp", "Nova Mobility Solutions"
    ]

    generated = []
    base_app_no = 6000000

    for i in range(120):
        p = random.choice(prefixes)
        s = random.choice(suffixes)
        name = f"{p} {s}"
        app_no = str(base_app_no + i * 137 + random.randint(10, 99))
        cls = random.choice([3, 5, 9, 12, 14, 25, 28, 29, 30, 35, 36, 38, 39, 41, 42, 43, 44, 45])
        st = random.choice(statuses)
        cntry = random.choice(countries)
        reg_no = f"TM-{random.randint(100000, 999999)}" if st == "Registered" else None
        owner = random.choice(owners_pool)
        filing_year = random.randint(2015, 2025)
        filing_month = random.randint(1, 12)
        filing_day = random.randint(1, 28)
        filing_date = f"{filing_year:04d}-{filing_month:02d}-{filing_day:02d}"
        reg_date = f"{filing_year+1:04d}-{filing_month:02d}-{filing_day:02d}" if st == "Registered" else None
        
        generated.append({
            "name": name,
            "app_no": app_no,
            "reg_no": reg_no,
            "owner": owner,
            "class": cls,
            "status": st,
            "country": cntry,
            "filing": filing_date,
            "reg": reg_date,
            "desc": f"Goods and services under class {cls} relating to {p.lower()} applications, {s.lower()} operations, and commercial deployment."
        })
    return generated

def seed_database(db: Session):
    # Ensure tables exist
    Base.metadata.create_all(bind=engine)

    # 1. Check if trademarks exist
    existing_count = db.query(Trademark).count()
    if existing_count == 0:
        print("Seeding trademark database...")
        all_marks = SAMPLE_TRADEMARKS + generate_expanded_records()
        for item in all_marks:
            tm = Trademark(
                trademark_name=item["name"],
                application_number=item["app_no"],
                trademark_number=item["reg_no"],
                owner=item["owner"],
                class_number=item["class"],
                status=item["status"],
                country=item["country"],
                filing_date=item["filing"],
                registration_date=item["reg"],
                goods_services_description=item["desc"]
            )
            db.add(tm)
        db.commit()
        print(f"Successfully seeded {len(all_marks)} trademark records.")

    # 2. Seed default user if not exists
    default_user = db.query(User).filter(User.email == "dev@wyt.io").first()
    if not default_user:
        print("Seeding default developer user...")
        default_user = User(
            email="dev@wyt.io",
            name="Wyt Developer",
            credits_balance=7519,
            credits_used=2481,
            total_requests=2481
        )
        db.add(default_user)
        db.commit()
        db.refresh(default_user)

        # Seed default API keys
        live_key = ApiKey(
            user_id=default_user.id,
            key="wyt_live_9f83a8b24e610d48",
            name="Production API Key",
            status="active",
            last_used_at=datetime.datetime.utcnow() - datetime.timedelta(minutes=3)
        )
        test_key = ApiKey(
            user_id=default_user.id,
            key="wyt_test_7c12d4a98e3b55f1",
            name="Sandbox / Staging Key",
            status="active",
            last_used_at=datetime.datetime.utcnow() - datetime.timedelta(hours=2)
        )
        db.add(live_key)
        db.add(test_key)
        db.commit()

        # Seed recent usage logs
        endpoints_sample = [
            ("/api/v1/trademarks?query=NIKE&search_mode=startswith", "startswith", 200, 11.4),
            ("/api/v1/trademarks?query=TECH&search_mode=contains", "contains", 200, 14.8),
            ("/api/v1/trademarks?query=TATA&search_mode=exact", "exact", 200, 8.2),
            ("/api/v1/trademarks?class=42&status=Registered", "contains", 200, 16.1),
            ("/api/v1/trademarks/1948201", "exact", 200, 6.7),
        ]
        for ep, mode, code, rt in endpoints_sample:
            log = ApiUsageLog(
                api_key_id=live_key.id,
                endpoint=ep,
                query_params=ep.split("?")[-1] if "?" in ep else "",
                search_mode=mode,
                credits_consumed=1,
                status_code=code,
                response_time_ms=rt,
                created_at=datetime.datetime.utcnow() - datetime.timedelta(minutes=random.randint(5, 120))
            )
            db.add(log)

        # Seed initial credit transaction
        tx = CreditTransaction(
            user_id=default_user.id,
            amount=10000,
            transaction_type="purchase",
            description="Initial Developer Grant (10,000 API Credits)"
        )
        db.add(tx)
        db.commit()
        print("Default user, keys, and initial history seeded.")
