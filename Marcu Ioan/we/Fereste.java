import greenfoot.*;  


public class Fereste extends Actor
{
    private double posx,posy,vx,vy;
    private int area=1,rotate=10;
    
    public void addedToWorld(World Space){
        posx=getX();
        posy=getY();
        
        double veloc= 50;
        int rot=Greenfoot.getRandomNumber(360);
        rotate=Greenfoot.getRandomNumber(20);
        area=Greenfoot.getRandomNumber(3)>1?-1:1;
        vx= veloc*Math.cos(rot*Math.PI/180);
        vy= veloc*Math.sin(rot*Math.PI/180);
    
}
    
    public void act() 
    {
       double gx=0,gy=10,dt=0.1;
       posx+=vx*dt+0.5*gx*dt*dt;
       posy+=vy*dt+0.5*gy*dt*dt;
       vx+= gx*dt;
       vy+=gy*dt;
       
       setLocation((int)posx,(int)posy);
       setRotation(getRotation()+area*rotate);
       
       if(getX()<=100 || getX()>getWorld().getWidth()+100 || getY()<=100 || getY()>getWorld().getHeight()+100)
        {
            getWorld().removeObject(this);
        }
    }    
}
