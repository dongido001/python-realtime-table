from sqlalchemy import Column, Integer, String, DateTime
from database import Base
from datetime import datetime

class Flight(Base):
    __tablename__ = 'flights'

    id = Column(Integer, primary_key=True)
    flight = Column(String(50))
    destination = Column(String(120))
    check_in = Column(DateTime, default=datetime.utcnow)
    departure = Column(DateTime, default=datetime.utcnow)
    status = Column(String(120))

    def __init__(self, flight=None, destination=None, check_in=None, departure=None, status=None):
        self.flight = flight
        self.destination = destination
        self.check_in = check_in
        self.departure = departure
        self.status = status

    def __repr__(self):
        return '<Flight %r>' % (self.flight)