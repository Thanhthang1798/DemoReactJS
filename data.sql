USE [master]
GO
/****** Object:  Database [DemoReactJS]    Script Date: 8/22/2020 5:49:17 PM ******/
CREATE DATABASE [DemoReactJS]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DemoReactJS', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\DemoReactJS.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'DemoReactJS_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\DemoReactJS_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [DemoReactJS] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DemoReactJS].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DemoReactJS] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DemoReactJS] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DemoReactJS] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DemoReactJS] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DemoReactJS] SET ARITHABORT OFF 
GO
ALTER DATABASE [DemoReactJS] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DemoReactJS] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DemoReactJS] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DemoReactJS] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DemoReactJS] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DemoReactJS] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DemoReactJS] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DemoReactJS] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DemoReactJS] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DemoReactJS] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DemoReactJS] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DemoReactJS] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DemoReactJS] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DemoReactJS] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DemoReactJS] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DemoReactJS] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DemoReactJS] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DemoReactJS] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [DemoReactJS] SET  MULTI_USER 
GO
ALTER DATABASE [DemoReactJS] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DemoReactJS] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DemoReactJS] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DemoReactJS] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [DemoReactJS] SET DELAYED_DURABILITY = DISABLED 
GO
USE [DemoReactJS]
GO
/****** Object:  Table [dbo].[INTERNSHIP]    Script Date: 8/22/2020 5:49:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[INTERNSHIP](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[NAME] [nvarchar](500) NULL,
	[MOTA] [nvarchar](max) NULL,
 CONSTRAINT [PK_INTERNSHIP] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[INTERNSHIP] ON 

INSERT [dbo].[INTERNSHIP] ([ID], [NAME], [MOTA]) VALUES (20, N'Nhã', N'Không sợ bị vả sập mặt')
INSERT [dbo].[INTERNSHIP] ([ID], [NAME], [MOTA]) VALUES (21, N'Hổ', N'Easy game')
INSERT [dbo].[INTERNSHIP] ([ID], [NAME], [MOTA]) VALUES (26, N'Nhã', N'Vô ngã')
INSERT [dbo].[INTERNSHIP] ([ID], [NAME], [MOTA]) VALUES (27, N'Hiếu', N'ồn ào nhất team')
SET IDENTITY_INSERT [dbo].[INTERNSHIP] OFF
USE [master]
GO
ALTER DATABASE [DemoReactJS] SET  READ_WRITE 
GO
